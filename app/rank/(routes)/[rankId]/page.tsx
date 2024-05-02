import React, { useState } from 'react';
import RankFriends from '../_components/RankFriends';
import { fetchGame } from '@/lib/actions/rank.actions';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';

const Rank = async ({ params }: { params: { rankId: string } }) => {

    const user = await currentUser();
    if (!user) return null;


    const gameDetails = await fetchGame(params.rankId)


    if (gameDetails && gameDetails.usersRanked.includes(user.emailAddresses[0].emailAddress)) {
        return (
            <div className="flex flex-col w-full justify-center items-center">
                <p className='text-white font-funky text-2xl text-center mb-4'>Mate, you have already voted!</p>

                <Link href={`/results/${params.rankId}`}>
                    <button
                        className="bg-jade px-10 py-2 rounded-lg cursor-pointer"
                    >
                        <p className="text-darkest font-funky text-md">View Results</p>
                    </button>
                </Link>
            </div >
        );
    }


    return (
        <div className="flex flex-col gap-6 w-full">
            <div className='w-full'>
                {
                    gameDetails ?
                        <RankFriends friends={gameDetails.friends} email={user.emailAddresses[0].emailAddress} isCreator={user.emailAddresses[0].emailAddress == gameDetails.created_by} categoriesReceived={gameDetails.categories} code={params.rankId} />
                        :
                        <div>
                            <p className='text-white font-funky text-2xl'>Game with ID: {params.rankId} does not exist.</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default Rank;
