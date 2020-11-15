import React from 'react';
// Redux
import {useSelector} from 'react-redux';
// style and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useHistory} from 'react-router-dom';
import {resizeImg} from '../util';

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

    return (
        <>
        {!isLoading && (
            <CardShadow className="shadow" onClick={exitHandler} >
                <Detail layoutId={pathID} className="detail">
                    <Stats className="stats">
                        <div className="rating">
                            <motion.h3 layoutId={`title ${pathID}`}> {game.name} </motion.h3>
                            <p> Rating: {game.rating} </p>
                        </div>
                        <Info className="info">
                            <h3>Platforms:</h3>
                            <Platfroms className="platforms">
                                {game.platforms.map(plat =>(
                                    <h3 key={plat.platform.id} > {plat.platform.name} </h3>
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
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platfroms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
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