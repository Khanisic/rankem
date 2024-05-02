// pages/results.tsx
import React from 'react';
import Results from '../_components/Results';
import { fetchGame } from '@/lib/actions/rank.actions';
import { currentUser } from '@clerk/nextjs';
import { fetchResults } from '@/lib/actions/results.actions';
const ResultsPage = async ({ params }: { params: { rankId: string } }) => {
    const results = await fetchResults(params.rankId);
    console.log(results);

    const gameDetails = await fetchGame(params.rankId)
    console.log(gameDetails.usersRanked.length)

    const gameData = {
        ...results,
        code: params.rankId
    };

    return (
        <div>
            {
                gameDetails ?
                    <Results voters={gameDetails.usersRanked.length} game={gameData} />
                    :
                    <div>
                        <p className='text-white font-funky text-2xl'>Game with ID: {params.rankId} does not exist.</p>
                    </div>
            }
        </div>
    );
}

export default ResultsPage;