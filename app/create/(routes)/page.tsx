"use client"

import { useState } from "react";
import UserPlus from "@/components/icons/UserPlus";
import CategoryPlus from "@/components/icons/CategoryPlus";
import Trash from "@/components/icons/Trash";
const Create = () => {

    const [friends, setFriends] = useState<string[]>(["Alpha", "Beta", "Gama", "Neo", "Sun"]);
    const [categories, setCategories] = useState<string[]>(["Angriest"]);

    const [friend, setFriend] = useState("")
    const [category, setCategory] = useState("")

    const createGame = async () => {
        console.log(friends, categories)
    }

    return (
        <div className="h-screen w-full flex justify-center items-center bg-dark px-5 md:px-10">
            <main className="bg-darkest py-20 px-4 md:p-16 rounded-xl flex flex-col items-center justify-center w-full">

                {/* Code with background */}
                <div className="w-full flex justify-center">
                    <span className="bg-indigo text-white font-funky py-2 px-4 text-xl rounded-lg " >Some catchy line here</span>
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-10 mt-6 justify-center">
                    <div className=" flex flex-col gap-4 justify-start">
                        <p className="text-white font-funky text-2xl ">Friends</p>
                        <div className="flex gap-4">
                            <input value={friend} onChange={(e) => setFriend(e.currentTarget.value)} className="outline-none placeholder:text-slate-200 text-white border-lime border-b-2 bg-transparent font-chill  py-2 self-start w-fit" placeholder="Enter name here" />
                            <UserPlus onClick={() => {
                                if (friend.trim() !== "") {
                                    setFriends((prevFriends) => [...prevFriends, friend])
                                    setFriend("")
                                }
                            }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            {
                                friends.map((friend, index) => {
                                    return (
                                        <div key={index} className="font-funky items-center flex gap-2 group">
                                            <div className="text-lime">
                                                {index + 1}.
                                            </div>
                                            <div className="flex justify-start w-fit px-3 py-1 text-xl rounded-xl items-center bg-lime self-start">
                                                {friend}
                                            </div>
                                            <div className="hidden group-hover:inline-block animate-bounce">
                                                <Trash onClick={() => {
                                                    setFriends(currentFriends =>
                                                        currentFriends.filter((_, friendIndex) => friendIndex !== index)
                                                    );
                                                }
                                                } />
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className=" flex flex-col gap-4 justify-start">
                        <p className="text-white font-funky text-2xl ">Categories</p>
                        <div className="flex gap-4">
                            <input value={category} onChange={(e) => setCategory(e.currentTarget.value)} className="outline-none placeholder:text-slate-200 text-white border-lavender border-b-2 bg-transparent font-chill  py-2 self-start w-fit" placeholder="Enter category here" />
                            <CategoryPlus onClick={() => {
                                if (category.trim() !== "") {
                                    setCategories((prevCategories) => [...prevCategories, category])
                                    setCategory("")
                                }
                            }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            {
                                categories.map((category, index) => {
                                    return (
                                        <div key={index} className="font-funky items-center flex gap-2 group">
                                            <div className="text-lavender">
                                                {index + 1}.
                                            </div>
                                            <div className="flex justify-start w-fit px-3 py-1 rounded-xl text-lg items-center bg-lavender self-start">
                                                {category}
                                            </div>

                                            <div className="hidden group-hover:inline-block animate-bounce">
                                                <Trash onClick={() => {
                                                    setCategories(currentCategories =>
                                                        currentCategories.filter((_, categoryIndex) => categoryIndex !== index)
                                                    );
                                                }
                                                } />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {
                    friends.length < 5 &&
                    <p className="text-white text-lg font-funky text-center mt-4 w-full">{5 - friends.length} more friend(s) required to create</p>
                }

                {
                    categories.length < 1 &&
                    <p className="text-white text-lg font-funky text-center mt-4 w-full">{1 - categories.length} more category(s) required to create</p>
                }

                {
                    friends.length > 4 && categories.length > 0 &&
                    <div className="flex w-full justify-center">
                        <div onClick={() => createGame()} className="bg-jade mb-2  hover:border-jade hover:border-2  duration-100 ease-in-out transition-all  hover:bg-transparent text-white py-2 px-8 font-funky rounded-full mt-8">
                            Create
                        </div>
                    </div>
                }
            </main>
        </div>
    );
}

export default Create;
