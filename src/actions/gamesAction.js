import axios from 'axios';
import {popularGamesURL} from '../api';
import {upcomingGamesURL} from '../api';
import {newGamesURL} from '../api';
import {searchGamesURL} from '../api';

// action creator
export const loadGames = () => async (dispatch) => {
    // fecth axios
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newgamesData = await axios.get(newGamesURL());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newgamesData.data.results,
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    // fecth axios
    const searchedGame = await axios.get(searchGamesURL(game_name));
    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searchedGame.data.results,
        }
    })
}