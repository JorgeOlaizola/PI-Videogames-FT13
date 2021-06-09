import { GETGAMEDETAIL, GETVIDEOGAMES } from "../actions/const";

const initialState = {
    games: [],
    gameDetail: [],
}

function reducer (state = initialState, action) { 
    switch(action.type){
        case GETVIDEOGAMES:
        return {...state, games: action.payload};
        case GETGAMEDETAIL:
        return {...state, gameDetail: action.payload};
        default:
        return state;
    }    
}

export default reducer