import { connectToDB } from "../mongoose";

interface Params {
    text: string,
    author: string,
    communityId: string | null,
    path: string,
  }

export async function fetchPosts(pageNumber = 1, pageSize = 20) {
    connectToDB();

  }
  
