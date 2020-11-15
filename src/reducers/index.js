import {combineReducers} from 'redux';
import gamesReducers from './gamesReducer';
import detailsReducer from './detailsReducer';

const rootReducers = combineReducers ({
    games: gamesReducers,
    detail: detailsReducer,
});

export default rootReducers;