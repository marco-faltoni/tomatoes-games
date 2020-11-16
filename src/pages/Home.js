import React, {useEffect} from 'react';
// components
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
// style and animation
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {useLocation} from 'react-router-dom';


function Home() {
    // catching the location
    const location = useLocation();
    const pathID = location.pathname.split('/')[2];
    // console.log(pathID);
    
    
    // fecth agmes
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadGames());
    },[dispatch]);
    // getting back the data
    const {popular, newGames, upcoming, searched} = useSelector((store) => store.games);
    
    return (
    <GameList>
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence> {pathID && <GameDetails pathID={pathID} />} </AnimatePresence>
            {searched.length ? (
                <div className='searched'>
                    <h2>Searched Games</h2>
                    <Games>
                        {searched.map((game)=> {
                            return <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} /> 
                        })}
                    </Games>
                </div>
            ): ''}
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
        </AnimateSharedLayout>
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
