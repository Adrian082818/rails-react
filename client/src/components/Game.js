import React from 'react';
import NewReview from './NewReview.js';

const Game = ({ games }) => {
    console.log(games)
    const renderGames = games.map(game => (
       <> <h1>Title: {game.title}</h1>
        <h2>Genre: {game.genre}</h2>
        <h3>Rating: {game.rating}</h3>
        <h3>Price: ${game.price}</h3> </>
    ))

    return (
        <div>
            {renderGames}
           <NewReview />
        </div>
    )
}

export default Game 