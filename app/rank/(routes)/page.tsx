"use client"
import { useState } from "react";

const Rank = () => {

    const names = ["Max Verstappen", "Messi", "Rolando", "Junior Firpo", "Pedri", "Gavi"]

    const categories = ["Angry", "Funny", "Smart", "Rich"]
    const [category, setCategory] = useState(0)

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex justify-center w-full">
                <p className="text-white font-funky text-2xl">Code: 123456</p>
            </div>
            <div className="flex justify-start items-start">
                <p className="text-white font-funky text-xl">Category {`(${category + 1}/${categories.length}): ${categories[category]}`}</p>
            </div>
            <div className="flex justify-start items-start w-full gap-2 flex-wrap">
                {
                    names.map((name, index) => {
                        return (
                            <div key={index} className="text-white px-6 py-2 bg-lavender rounded-xl font-chill">
                                {name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col justify-start items-start w-full gap-5">
                {
                    names.map((name, index) => {
                        return (
                            <div key={index} className="text-white font-chill">
                                {index + 1}.
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-start items-start gap-4 flex-wrap">
                {
                    category !== 0 &&
                    (
                        <div className="bg-peach px-10 py-2 rounded-lg cursor-pointer" onClick={() => {
                            setCategory((cat) => cat - 1)
                        }}>
                            <p className="text-darkest font-funky text-xl">Previous Category</p>
                        </div>
                    )
                }
                {
                    category + 1 < categories.length && (
                        <div className="bg-jade px-10 py-2 rounded-lg cursor-pointer" onClick={() => {
                            setCategory((cat) => cat + 1)
                        }}>
                            <p className="text-darkest font-funky text-xl">Next Category</p>
                        </div>
                    )
                }


            </div>
        </div>
    );
}

export default Rank;