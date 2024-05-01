"use client";
import React, { useState } from 'react';
import { Reorder } from 'framer-motion';

function Rank() {
    const initialNames = ["Max Verstappen", "Messi", "Rolando", "Junior Firpo", "Pedri", "Gavi"];
    
    // We will use the name directly as the value to be reordered.
    const [names, setNames] = useState(initialNames);
    const [category, setCategory] = useState(0);
    const categories = ["Angry", "Funny", "Smart", "Rich"];

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex justify-center w-full">
                <p className="text-white font-funky text-2xl">Code: 123456</p>
            </div>
            <div className="flex justify-start items-start">
                <p className="text-white font-funky text-xl">Category {`(${category + 1}/${categories.length}): ${categories[category]}`}</p>
            </div>

            {/* Reorder.Group to manage the list based on names state */}
            <Reorder.Group axis="y" values={names} onReorder={setNames} className="flex flex-col gap-2 w-full items-center justify-center">
                {names.map((name) => (
                    <Reorder.Item key={name} value={name} className="text-white px-6 py-2 bg-lavender rounded-xl font-chill w-full text-center">
                        {name}
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            <div className="flex justify-center items-start gap-4 flex-wrap">
                {category !== 0 && (
                    <button
                        className="bg-peach px-10 py-2 rounded-lg cursor-pointer"
                        onClick={() => setCategory((cat) => Math.max(cat - 1, 0))}
                    >
                        <p className="text-darkest font-funky text-md">Previous Category</p>
                    </button>
                )}
                {category + 1 < categories.length && (
                    <button
                        className="bg-jade px-10 py-2 rounded-lg cursor-pointer"
                        onClick={() => setCategory((cat) => Math.min(cat + 1, categories.length - 1))}
                    >
                        <p className="text-darkest font-funky text-md">Next Category</p>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Rank;
