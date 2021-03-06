import {createGlobalStyle} from 'styled-components';

const StyledGame = createGlobalStyle `
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
        background: whitesmoke;
        }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width:100%;
    }
    h2 {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }
    h3 {
        font-size: 1.3rem;
        color: #333;
        padding:1.5rem 0rem;
    }
    p{
        font-size: 1.1rem;
        line-height: 200%;
        color:#696969;
    }
    #card-text {
        margin-bottom: 1rem;
        font-style: italic;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    input {
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default StyledGame;