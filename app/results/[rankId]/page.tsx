// pages/results.tsx
import React from 'react';
import Results from '../_components/Results';
import { fetchGame } from '@/lib/actions/rank.actions';
import { currentUser } from '@clerk/nextjs';
import { fetchResults } from '@/lib/actions/results.actions';
const ResultsPage = async ({ params }) => {
    const gameDetails = await fetchResults(params.rankId);
    console.log(gameDetails);

    
    const gameData = {
        ...gameDetails,
        code: params.rankId  
    };

    return (
        <div>
            <Results game={gameData} />
        </div>
    );
}

export default ResultsPage;