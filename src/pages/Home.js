import React, {useEffect} from 'react';
// Redux
import {useDispatch} from 'react-redux';
import {loadGames} from '../actions/gamesAction';


function Home() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadGames())
    });

    return (
    <div className="App">
        <h1>Hello my georgious friend of the internet</h1>
    </div>
    );
}

export default Home;
