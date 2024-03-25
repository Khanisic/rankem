"use client"
import { useState } from "react";

const Rank = () => {

    const codes = ["24ksn8", "09h3a1", "826and"]

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex justify-center w-full">
                <p className="text-white font-funky text-2xl">Select game code</p>
            </div>
            <div className="flex flex-col gap-4 w-full justify-center items-center">
                {
                    codes.map((code, index) => {
                        return (
                            <div key={index} className="flex cursor-pointer font-chill gap-3 text-white items-center">
                                {index + 1}. <p className="bg-indigo font-funky text-xl px-10 py-1 rounded-xl">{code}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Rank;