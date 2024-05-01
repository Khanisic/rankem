"use server"

import Games from "../models/games.model";
import dbConnect from "../mongoose";
import { generateCode } from "../util";


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



// export async function createCourse(values: any) {
//   try {
//       dbConnect();

//       const courseExists = await Course.find(
//           { courseID: values.courseID }
//       )

//       let section_id;
//       if (courseExists.length > 0) {
//           section_id = courseExists[courseExists.length - 1].section + 1;
//       } else {
//           section_id = 1;
//       }

//       const newCourse = await Course.create({
//           courseTitle: values.title,
//           img: values.img,
//           section: section_id,
//           courseID: values.courseID
//       })

//       return ({
//           courseTitle: newCourse.title,
//           img: newCourse.img,
//           section: newCourse,
//           courseID: newCourse.courseID
//       })

//   } catch (error: any) {
//       throw new Error(`Failed to fetch user: ${error.message}`);
//   }
// }
