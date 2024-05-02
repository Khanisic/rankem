"use server"

import Games from "../models/games.model";
import Results from "../models/results.model";
import dbConnect from "../mongoose";
import { generateCode } from "../util";

// Define the structure of a single ranking
interface Ranking {
  friend: string;
  points: number;
}

// Define the structure for the rankings by category
interface Rankings {
  [category: string]: string[]; // This assumes rankings are provided as arrays of friend names by category
}

// Define the structure for the results to be stored in the database
interface ResultEntry {
  category: {
    name: string;
    results: Ranking[];
  };
}


export async function createGame(email: string, friends: string[], categories: string[], anonymous: boolean) {
  try {
    dbConnect();
    const code = generateCode();
    console.log(email, friends, categories)

    const gameCodeExists = await Games.findOne({
      id: code
    })

    console.log(gameCodeExists)

    if (gameCodeExists) return

    const newGame = await Games.create({
      id: code,
      created_by: email,
      friends,
      categories,
      anonymous
    })

    return newGame.id

  } catch (error: any) {
    throw new Error(`${error.message}`);

  }
}



export async function fetchGame(id: string) {
  try {
    dbConnect();

    const gameExists = await Games.findOne({
      id: id
    })

    return gameExists

  } catch (error: any) {
    throw new Error(`${error.message}`);

  }
}


export async function submitRankingsandResults(rankings: Rankings, id: string, email: string) {
  try {
    await dbConnect();


    const categories = Object.keys(rankings);
    const numberOfNames = rankings[categories[0]].length;
    let results: ResultEntry[] = [];

    const game = await Games.findOne({
      id
    })

    const existingResults = await Results.findOne({
      id: game._id
    })

    if (existingResults.usersRanked.includes(email)) return
    
    if (existingResults) {

      existingResults.results.forEach(category => {

        let newRankings = rankings[category.category.name]

        const rankedResults: Ranking[] = category.category.results.map((res, index) => ({
          friend: res.friend,
          points: res.points + numberOfNames - newRankings.indexOf(res.friend)
        }));

        results.push({
          category: {
            name: category.category.name,
            results: rankedResults
          }
        });
      })

      existingResults.results = results;
      existingResults.usersRanked.push(email)
      existingResults.save();

      return { msg: "Done" }
    }

    // categories.forEach(category => {
    //   const rankedResults: Ranking[] = rankings[category].map((name, index) => ({
    //     friend: name,
    //     points: numberOfNames - index // Assign points based on rank
    //   }));

    //   results.push({
    //     category: {
    //       name: category,
    //       results: rankedResults
    //     }
    //   });

    //   console.log(rankedResults);
    // });

    // console.log("-------------------------------------------------");

    // const createdResult = await Results.create({
    //   id: game._id,
    //   published: false,
    //   results,
    //   usersRanked: [email]
    // });

    // console.log("Result stored:", createdResult);

    // return { msg: "Done" }
  } catch (error: any) {
    console.error("Error submitting rankings and results:", error.message);
    throw new Error(`${error.message}`);
  }
}


export async function publishResults(id: string) {
  try {
    await dbConnect();

    const game = await Games.findOne({
      id
    })


    const result = await Results.findOne({
      id: game._id
    })

    result.published = true;

    await result.save();

    return { msg: "Published" }

  } catch (error) {
    console.log(error)
  }
}