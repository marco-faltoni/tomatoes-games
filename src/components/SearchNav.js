import React, {useState} from 'react';
// redux and routes
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';
// style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {slideDown} from '../animation';
import logo from '../img/game_tomatoes.svg';

const Nav = () => {
    const dispatch = useDispatch();
    // non ho davvero bisogno di usare redux, posso settare uno State specifico solo in questo componente, perché lo uso solo qua
    const [textInput, setTextInput] = useState('');

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }
    const submitSearch = (e) => {
        e.preventDefault();
        console.log(textInput);
        dispatch(fetchSearch(textInput));
        setTextInput('');
    }

    const clearSearch = () => {
        dispatch({type: "CLEAR_SEARCHED"});
    }


    return (
        <StyledNav variants={slideDown} initial='hidden' animate='show' >
            <Logo onClick={clearSearch}>
                <img src={logo} alt={logo} />
                <h1>Tomatoes for Games</h1>
            </Logo>
            <form onSubmit={submitSearch} className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button type='submit'>Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div) `
    padding: 3rem 5rem;
    text-align: center;
    .search {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
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
            box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            background: #ff7676;
            color: white;
        }
    }
    
    @media (max-width: 900px) {
        padding: 3rem 3rem;
        .search {
            input {
                width: 60%;
            }
            button {
                font-size: 1rem;
                padding: 0.8rem 1rem;
            }
        }
        
    }
    @media (max-width: 600px) {
        padding: 3rem 3rem;
        .search {
            input {
                width: 70%;
            }
            button {
                font-size: 0.8rem;
                padding: 1rem 1rem;
            }
        }
        
    }
`;

const Logo = styled(motion.div) `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
    cursor: pointer;
    img {
        height: 4rem;
        width: 4rem;
        margin-right: 1rem;
    }
    @media (max-width: 600px) {
        img {
            height: 3rem;
            width: 3rem;
        }
        h1 {
            font-size:1.6rem;
        }
    }  
`;

export default Nav ;
