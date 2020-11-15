import React from 'react';
// Redux
import {useDispatch} from 'react-redux';
import {loadDetails} from '../actions/detailAction';
// style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Game = ({name, released, image, id}) => {
    // load details
    const dispatch = useDispatch();
    // on click i get details from the game: thanks to dispatch, i run the action's function for the details
    const loadDetailsHandler = () => {
        dispatch(loadDetails(id));
    }


    return (
        <StyledGame onClick={loadDetailsHandler} >
            <Link to={`/game/${id}`} >
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image} alt={name} />
            </Link>   
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
    padding: 1.6rem;
    padding-top:0rem;
    text-align:center;
    border-radius: 0.5rem;
    cursor: pointer;
    img {
        width:100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;