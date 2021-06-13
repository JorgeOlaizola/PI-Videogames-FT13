import { GETGAMEDETAIL, GETGENRES, GETVIDEOGAMES } from "../actions/const";

const initialState = {
    games: [],
    gameDetail: [],
    genres: []
}

function reducer (state = initialState, action) { 
    switch(action.type){
        case GETVIDEOGAMES:
        return {...state, games: action.payload};
        case GETGAMEDETAIL:
        return {...state, gameDetail: action.payload};
        case GETGENRES:
        return {...state, genres: action.payload};
        default:
        return state;
    }    
}

export default reducer