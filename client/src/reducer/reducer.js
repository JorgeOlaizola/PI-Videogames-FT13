import { GETVIDEOGAMES } from "../actions/const";

const initialState = {
    games: []
}

function reducer (state = initialState, action) { 
    switch(action.type){
        case GETVIDEOGAMES:
        return {...state, games: action.payload}
        default:
        return state;
    }    
}

export default reducer