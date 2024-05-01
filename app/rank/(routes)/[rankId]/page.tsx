import React, { useState } from 'react';
import RankFriends from '../_components/RankFriends';
import { fetchGame } from '@/lib/actions/rank.actions';
import { currentUser } from '@clerk/nextjs';

const Rank = async ({ params }: { params: { rankId: string } }) => {

    const user = await currentUser();
    if (!user) return null;
    console.log(user.emailAddresses[0].emailAddress)

    const gameDetails = await fetchGame(params.rankId)
    console.log(gameDetails)
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className='w-full'>
                <RankFriends friends={gameDetails.friends} email={user.emailAddresses[0].emailAddress} isCreator={user.emailAddresses[0].emailAddress == gameDetails.created_by}  categoriesReceived={gameDetails.categories} code={params.rankId} />
            </div>
        </div>
    );
}

export default Rank;
