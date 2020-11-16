import React from 'react';
// style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/game_tomatoes.svg';

const Nav = () => {
    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt={logo} />
                <h1>Tomatoes for Games</h1>
            </Logo>
            <div className="search">
                <input type="text"/>
                <button>Search</button>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div) `
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
        border-top-right-radius: none;
        border-top-left-radius: 5px;
        border-bottom-right-radius: none;
        border-bottom-left-radius: 5px;
        outline: none;
    }
    button {
        padding: 0.5rem 2rem;
        cursor: pointer;
        font-size: 1.5rem;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background: #ff7676;
        color: white;
    }
`;

const Logo = styled(motion.div) `
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
        height: 4rem;
        width: 4rem;
        margin-right: 1rem;
    }
`;

export default Nav ;
