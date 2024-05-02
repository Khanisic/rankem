// pages/results.tsx
import React from 'react';
import Results from '../_components/Results';
import { fetchGame } from '@/lib/actions/rank.actions';
import { currentUser } from '@clerk/nextjs';
import { fetchResults } from '@/lib/actions/results.actions';
const ResultsPage = async ({ params }: { params: { rankId: string } }) => {
    const gameDetails = await fetchResults(params.rankId);
    console.log(gameDetails);


    const gameData = {
        ...gameDetails,
        code: params.rankId
    };

    return (
        <div>
            {
                gameDetails ?
                    gameDetails?.published ?
                        <Results game={gameData} />
                        :
                        <div>
                            <p className='text-white font-funky text-2xl'>Waiting for results!.</p>
                        </div>
                    :
                    <div>
                        <p className='text-white font-funky text-2xl'>Game with ID: {params.rankId} does not exist.</p>
                    </div>
            }
        </div>
    );
}

export default ResultsPage;