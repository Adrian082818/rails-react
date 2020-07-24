import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap'
// import Review from '../components/Review'
import GameLink from '../components/GameLink'

const SideBar = ({ games }) => {
    const gameLinks = games.map( (game) => (
        <GameLink game={game} />
   
    ))
    return(
        <div className="SideBar">
            <h4>Games Library</h4>
            {gameLinks}
            
        </div>
    )
}


export default SideBar;