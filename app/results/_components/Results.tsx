"use client";
import { useState } from "react";

const Results = ({ game }: any) => {
    const [category, setCategory] = useState(0);
    const sortedResults = game.results[category].category.results.sort((a, b) => b.points - a.points);

    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex justify-center w-full">
                <p className="text-white font-funky text-2xl">Code: {game.code}</p>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
                <p className="text-white font-funky text-xl">Category: {game.results[category].category.name}</p>
                <p className="text-white font-funky text-xl">Voters: {sortedResults.length}</p>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
                {sortedResults.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 w-full">
                        <p className="text-white text-center rounded-xl font-chill">{index + 1}.</p>
                        <p className="text-white text-center px-6 py-2 bg-lavender rounded-xl font-chill w-full">
                            {result.friend} - {result.points} points
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center w-full gap-2"> {/* Vertical stack with consistent width */}
                {category !== 0 && (
                    <button className="bg-peach px-10 py-2 rounded-lg cursor-pointer w-full" onClick={() => setCategory(cat => Math.max(0, cat - 1))}>
                        Previous Category
                    </button>
                )}
                {category + 1 < game.results.length && (
                    <button className="bg-jade px-10 py-2 rounded-lg cursor-pointer w-full" onClick={() => setCategory(cat => Math.min(game.results.length - 1, cat + 1))}>
                        Next Category
                    </button>
                )}
            </div>
        </div>
    );
}

export default Results;
