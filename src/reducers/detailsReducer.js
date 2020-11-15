const initState = { game: {platforms:[]}, screen: {results:[]}, isLoading: true, };

const detailsReducer = (state=initState, action) => {
    switch(action.type){
        case "GET_DETAILS":
            return {
                ...state, 
                game: action.payload.game,
                screen: action.payload.gameScreens,
                isLoading: false,
            };
        case "LOADING":
            return{
                ...state,
                isLoading: true,
            }
                
        default:
            return {...state};
    }
}

export default detailsReducer;
