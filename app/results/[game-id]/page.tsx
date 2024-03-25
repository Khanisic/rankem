"use client"

import { useState } from "react";

const Results = () => {

    const names = ["Max Verstappen", "Messi", "Rolando", "Junior Firpo", "Pedri", "Gavi"]
    const [admin, setAdmin] = useState(true)
    const categories = ["Angry", "Funny", "Smart", "Rich"]
    const [category, setCategory] = useState(0)

    const voters = 23

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex justify-center">
                <p className="text-white font-funky text-2xl">Code: 123456</p>
            </div>

            <div className="flex justify-start items-start gap-4 flex-col">
                <p className="text-white font-funky text-xl">Category {`(${category + 1}/${categories.length}): ${categories[category]}`}</p>
                <p className="text-white font-funky text-xl">Voters: {voters}</p>
            </div>

            <div className="flex">
                <div className="flex justify-start items-stretch gap-2 flex-col ">
                    {
                        names.map((name, index) => {
                            return (
                                <div key={index} className=" flex items-center gap-2">
                                    <p className="text-white text-center rounded-xl font-chill">
                                        {index + 1}.
                                    </p>
                                    <p className="text-white text-center px-6 py-2 bg-lavender rounded-xl font-chill">
                                        {name}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex justify-start items-start gap-4 flex-wrap">
                {
                    category !== 0 &&
                    (
                        <div className="bg-peach px-10 py-2 rounded-lg cursor-pointer" onClick={() => {
                            setCategory((cat) => cat - 1)
                        }}>
                            <p className="text-darkest font-funky text-md">Previous Category</p>
                        </div>
                    )
                }
                {
                    category + 1 < categories.length && (
                        <div className="bg-jade px-10 py-2 rounded-lg cursor-pointer" onClick={() => {
                            setCategory((cat) => cat + 1)
                        }}>
                            <p className="text-darkest font-funky text-md ">Next Category</p>
                        </div>
                    )
                }

            </div>
            {
                admin && (
                    <div className="bg-lime px-10 py-2  self-center rounded-lg cursor-pointer" onClick={() => {
                        //Publish results function
                    }}>
                        <p className="text-darkest font-funky text-md ">Publish Results</p>
                    </div>
                )
            }
        </div>
    );
}

export default Results;