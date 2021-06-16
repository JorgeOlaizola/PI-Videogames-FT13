import { GETGAMEDETAIL, GETGENRES, GETVIDEOGAMES, ORDERBYNAME, ORDERBYRATING } from "../actions/const";

const initialState = {
    games: [],
    gameDetail: [],
    genres: []
}

function reducer (state = initialState, action) { 
    switch(action.type){
        case GETVIDEOGAMES: 
        return {...state, games: action.payload}
        case GETGAMEDETAIL:
        return {...state, gameDetail: action.payload};
        case GETGENRES:
        return {...state, genres: action.payload};
        case ORDERBYNAME:
        return {...state, games: state.games.sort((prev, next) => {
            if(prev.name > next.name) return 1
            if(prev.name < next.name) return -1
            return 0
        })}
        case ORDERBYRATING:
        return {...state, games: state.games.sort((prev,next) => prev.rating - next.rating)}
        default:
        return state;
    }    
}

export default reducer