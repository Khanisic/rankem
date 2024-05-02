"use client";
import ShareIcon from "@/components/icons/ShareIcon";
import { useState } from "react";
import toast from "react-hot-toast";

const Results = ({ game, voters, code }: any) => {
    const [category, setCategory] = useState(0);
    const sortedResults = game.results[category].category.results.sort((a, b) => b.points - a.points);

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex justify-center w-full gap-2">
                <p className="text-white font-funky text-2xl">Code: {code} | Share: </p>
                <ShareIcon onClick={() => {
                    navigator.clipboard.writeText(`rankem-seven.vercel.app/rank/${code}`).then((res) => {
                        toast.success("Link copied")
                    })
                }} />
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
                <p className="text-white font-funky text-xl">Category: <span className='bg-lime text-black px-4 py-1 rounded-lg' >{game.results[category].category.name}</span> </p>
                <p className="text-white font-funky text-xl">Voters: {voters}</p>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
                {sortedResults.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 w-full">
                        <p className="text-white text-center rounded-xl font-chill">{index + 1}.</p>
                        <p className="text-white text-center px-6 py-2 hover:text-lavender hover:bg-dark transition-all duration-200 ease-in-out bg-lavender rounded-xl font-chill w-full">
                            {result.friend} - {result.points} points
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-2"> {/* Vertical stack with consistent width */}
                {category !== 0 && (
                    <button className="bg-peach px-10 font-funky py-2 rounded-lg cursor-pointer w-fit" onClick={() => setCategory(cat => Math.max(0, cat - 1))}>
                        Previous Category
                    </button>
                )}
                {category + 1 < game.results.length && (
                    <button className="bg-jade px-10 font-funky py-2 rounded-lg cursor-pointer w-fit" onClick={() => setCategory(cat => Math.min(game.results.length - 1, cat + 1))}>
                        Next Category
                    </button>
                )}
            </div>
        </div>
    );
}

export default Results;
