import {combineReducers} from 'redux';
import gamesReducers from './gamesReducer';

const rootReducers = combineReducers ({
    games: gamesReducers,
});

export default rootReducers;