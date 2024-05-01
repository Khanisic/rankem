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


export async function submitRankingsandResults(rankings: Rankings, id: string, email: string): Promise<void> {
  try {
    await dbConnect();

    const game = await Games.findOne({
      id
    })
    console.log(game._id)
    const categories = Object.keys(rankings);
    const numberOfNames = rankings[categories[0]].length; // Assumes at least one category exists
    let results: ResultEntry[] = [];

    categories.forEach(category => {
      const rankedResults: Ranking[] = rankings[category].map((name, index) => ({
        friend: name,
        points: numberOfNames - index // Assign points based on rank
      }));

      results.push({
        category: {
          name: category,
          results: rankedResults
        }
      });

      console.log(rankedResults);
    });

    console.log("-------------------------------------------------");

    const createdResult = await Results.create({
      id: game._id,
      published: false,
      results,
      usersRanked: [email]
    });

    console.log("Result stored:", createdResult);

  } catch (error: any) {
    console.error("Error submitting rankings and results:", error.message);
    throw new Error(`${error.message}`);
  }
}

