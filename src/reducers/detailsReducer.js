const initState = { game: {}, screen: {} };

const detailsReducer = (state=initState, action) => {
    switch(action.type){
        case "GET_DETAILS":
            return {
                ...state, 
                game: action.payload.game,
                screen: action.payload.gameScreens,
            };
        default:
            return {...state};
    }
}

export default detailsReducer;
