import React, {useEffect} from 'react';
// components
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
// style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';


function Home() {
    // catching the location
    const location = useLocation();
    const pathID = location.pathname.slice('/')[2];
    console.log(pathID);
    
    // fecth agmes
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadGames());
    },[dispatch]);
    // getting back the data
    const {popular, newGames, upcoming} = useSelector((store) => store.games);
    
    return (
    <GameList>
        {pathID && <GameDetails/>}
        <h2>Upcoming Games</h2>
        <Games>
            {upcoming.map((game)=> {
                return <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} /> 
            })}
        </Games>
        <h2>Popular Games</h2>
        <Games>
            {popular.map((game)=> {
                return <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} /> 
            })}
        </Games>
        <h2>News Games</h2>
        <Games>
            {newGames.map((game)=> {
                return <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} /> 
            })}
        </Games>
    </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
`;

export default Home;
