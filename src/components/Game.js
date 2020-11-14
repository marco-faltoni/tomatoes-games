import React from 'react';
// Redux
import {useDispatch, useSelector} from 'react-redux';
// style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Game = ({name, released, image}) => {

    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
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
    img {
        width:100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;