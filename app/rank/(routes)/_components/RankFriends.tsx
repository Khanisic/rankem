"use client";

import { publishResults, submitRankingsandResults } from '@/lib/actions/rank.actions';
import { Reorder } from 'framer-motion'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function RankFriends({ friends, categoriesReceived, code, isCreator, email }: any) {
    const [names, setNames] = useState(friends);
    const [category, setCategory] = useState(0);
    const [categories, setCategories] = useState(categoriesReceived);
    const [rankings, setRankings] = useState<{ [key: string]: string[] }>({});

    const [submitted, setSubmitted] = useState(false)
    console.log(rankings)
    const router = useRouter()

    const nextStep = () => {
        // Save current rankings in the state
        const updatedRankings = {
            ...rankings,
            [categories[category]]: names
        };
        setRankings(updatedRankings);

        setCategory((cat) => Math.min(cat + 1, categories.length - 1));
    };

    const submitRankings = () => {

        const updatedRankings = {
            ...rankings,
            [categories[category]]: names
        };
        setRankings(updatedRankings);
        console.log("Submitting Rankings: ", updatedRankings);

        const submitted = submitRankingsandResults(updatedRankings, code, email).then((res: any) => {
            console.log(res)
            setSubmitted(true)
            res && res.msg && toast.success("Submitted rankings")
            router.push(`/results/${code}`)
        })

    };

    const publishRankings = () => {
        if (isCreator) {
            console.log("here")
            publishResults(code).then((res) => {
                console.log(res)
            });
            toast.success("Results published")
        }
    }
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className="flex justify-center w-full">
                <p className="text-white font-funky text-2xl">Code: {code}</p>
            </div>
            <div className="flex justify-start items-start">
                <p className="text-white font-funky my-2 text-xl">Category {`(${category + 1}/${categories.length}): `}  <span className='bg-lime text-black px-4 py-1 rounded-lg'>{categories[category]}</span> </p>
            </div>

            <Reorder.Group axis="y" values={names} onReorder={setNames} className="flex flex-col gap-2 w-full justify-center items-center">
                {names.map((name, index) => (
                    <Reorder.Item key={name} value={name} className="text-white px-6 py-2 bg-lavender rounded-xl font-chill w-fit text-center">
                        {index + 1}. {name}
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
                        onClick={() => nextStep()}
                    >
                        <p className="text-darkest font-funky text-md">Next Category</p>
                    </button>
                )}
                {!submitted && categories.length - 1 === category && (
                    <button
                        className="bg-jade px-10 py-2 rounded-lg cursor-pointer"
                        onClick={() => submitRankings()}
                    >
                        <p className="text-darkest font-funky text-md">Submit</p>
                    </button>
                )}
                {
                    isCreator && categories.length - 1 == category &&
                    <button
                        className="bg-lime px-10 py-2 rounded-lg cursor-pointer"
                        onClick={() => publishRankings()}
                    >
                        <p className="text-darkest font-funky text-md">Publish</p>
                    </button>
                }
            </div>

        </div>
    )
}

export default RankFriends
