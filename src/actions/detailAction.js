import axios from 'axios';
import {detailGameURL} from '../api';
import {gameScreenshotsURL} from '../api';

export const loadDetails = (id) => async (dispatch) => {

    // ancora devo caricare i dati quindi non far apparire il contenitore detatgli card finche non ce li ho
    dispatch({
        type: "LOADING"
    })

    // fecth axios
    const detailsData = await axios.get(detailGameURL(id));
    const screensData = await axios.get(gameScreenshotsURL(id));

    dispatch({
        type: 'GET_DETAILS',
        payload: {
            game: detailsData.data,
            gameScreens: screensData.data,
        }
    })
}