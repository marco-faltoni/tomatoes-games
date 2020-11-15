import React from 'react';
// Redux
import {useDispatch} from 'react-redux';
import {loadDetails} from '../actions/detailAction';
// style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {resizeImg} from '../util';

const Game = ({name, released, image, id}) => {
    // for the card animation i need to covert the id to a string to match the another id from GameDetails
    const idToString = id.toString();
    
    // load details
    const dispatch = useDispatch();
    // on click i get details from the game: thanks to dispatch, i run the action's function for the details
    const loadDetailsHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetails(id));
    }


    return (
        <StyledGame layoutId={idToString} onClick={loadDetailsHandler} >
            <Link to={`/game/${id}`} >
                <motion.h3 layoutId={`title ${idToString}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${idToString}`} src={resizeImg(image, 640)} alt={name} />
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