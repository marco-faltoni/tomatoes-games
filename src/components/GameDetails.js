import React from 'react';
// Redux
import {useSelector} from 'react-redux';
// style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useHistory} from 'react-router-dom';
import {resizeImg} from '../util';
// images
import playstation from "../img/playstation.svg";
import ps5 from "../img/PS5_logo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import xboxnextgen from "../img/xb.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.svg";
import starFull from "../img/star-full.svg";
import starHalf from "../img/star-half.svg";

const GameDetails = ({pathID}) => {
    // extracting data "detail" from redux state
    const {screen, game, isLoading} = useSelector(store => store.detail);
    

    // exit page detail
    const history = useHistory();
    const exitHandler = (e) => {
        const element = e.target;
        // console.log(element);
        
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    };

    //get platform images
    const getPlatform = (platform) => {
        switch (platform) {
        case "PlayStation 5":
            return ps5;
        case "PlayStation 4":
            return playstation;
        case "Xbox Series S/X":
            return xboxnextgen;
        case "Xbox One":
            return xbox;
        case "PC":
            return steam;
        case "Nintendo Switch":
            return nintendo;
        case "iOS":
            return apple;
        default:
            return gamepad;
        }
    };

    // return stars icons 
    const getStars = () => {
        // imposto array vuoto
        const stars = [];
        // normalizzo il voto arrotondandolo ad un numero intero o alla sua meta(es. 3, 3.5 o 4)
        const rating = Math.round(game.rating / 0.5) * 0.5;
        // console.log(rating);

        // salvo in una variabile il voto normalizzato di prima arrontodandolo al minimo
        const fullStars = Math.floor(rating);
        // console.log(fullStars);

        // verifico e salvo in una variabile se il voto arrotondato al minimo è minore del voto normalizzato, se è vero allora vuol diro che il voto normalizzato deve avere un rating con l'ultima stella a metà
        const HalfStar = (fullStars < rating);
        
        // faccio un ciclo, finche la i è minore al voto arrotondato al minimo stampo stelle piene, se la variabile "HalfStar" è vera stampo una stellina a metò, se è falsa stampo le restanti stelline vuote
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<img key={i} src={starFull} alt='star' ></img>);
            } else if(HalfStar) {
                stars.push(<img key={i} src={starHalf} alt='star' ></img>);
            } else {
                stars.push(<img key={i} src={starEmpty} alt='star' ></img>);
            }
        }
        return stars;
    }

    return (
        <>
        {!isLoading && (
            <CardShadow className="shadow" onClick={exitHandler} >
                <Detail layoutId={pathID} className="detail">
                    <Stats className="stats">
                        <div className="rating">
                            <motion.h3 layoutId={`title ${pathID}`}> {game.name} </motion.h3>
                            <p> Rating: {game.rating} </p>
                            {getStars()}
                        </div>
                        <Info className="info">
                            <h3>Platforms:</h3>
                            <Platfroms className="platforms">
                                {game.platforms.map(plat =>(
                                    <img key={plat.platform.id} src={getPlatform(plat.platform.name)} alt={`platform: ${plat.platform.name}`} />
                                ))}
                            </Platfroms>
                        </Info>
                    </Stats>
                    <Media className="media">
                        <motion.img layoutId={`image ${pathID}`} src={resizeImg(game.background_image, 1280) } alt={`${game.name} image`} />
                    </Media>
                    <Description className="description">
                        <p> {game.description_raw} </p>
                    </Description>
                    <div className="gallery">
                        {screen.results.map(screen =>(
                            <img src={resizeImg(screen.image, 1280) } key={screen.id} alt={`${game.name} screenshot`}/>
                        ))}
                    </div>
                </Detail>
            </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index:10;
    &::-webkit-scrollbar {
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: whitesmoke;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: whitesmoke;
    position: absolute;
    left:10%;
    color: black;
    z-index:10;
    img {
        width:100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .rating img {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platfroms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
        width: 45px;
    }
`;

const Media = styled(motion.div)`
    margin-top: 3rem;
    img {
        width: 100%;
        /* height: 60vh;
        object-fit: cover; */
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetails;