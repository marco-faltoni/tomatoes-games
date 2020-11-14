import axios from 'axios';
import {popularGamesURL} from '../api';
import {upcomingGamesURL} from '../api';
import {newGamesURL} from '../api';

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