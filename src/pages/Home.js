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
import {fadeIn} from '../animation';
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
    <GameList variants={fadeIn} initial='hidden' animate='show'>
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
    padding-bottom: 4rem;
    h2 {
        padding: 5rem 0rem;
    }
    @media (max-width: 900px) {
        padding: 0rem 1rem;
        padding-bottom: 2rem;
        h2 {
            text-align: center;
        }
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`;

export default Home;
