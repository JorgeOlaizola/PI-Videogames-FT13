import { GETGAMEDETAIL, GETGENRES, GETVIDEOGAMES, ORDERBY } from "../actions/const";

const initialState = {
    games: [],
    gamesAPI: [],
    gameDetail: [],
    genres: []
}

function reducer (state = initialState, action) { 
    switch(action.type){
        case GETVIDEOGAMES:
                return {...state, games: action.payload, gamesAPI: action.payload}
        case GETGAMEDETAIL:
        return {...state, gameDetail: action.payload};
        case GETGENRES:
        return {...state, genres: action.payload};
        case ORDERBY:
            if(action.payload === 'default'){
                return {...state, games: state.gamesAPI}
            }
            if(action.payload === 'A-Z'){
                return {...state, games: [...state.gamesAPI].sort((prev, next) => {
                if(prev.name > next.name) return 1
                if(prev.name < next.name) return -1
                return 0
                })}}
            if(action.payload === 'Z-A'){
                return {...state, games: [...state.gamesAPI].sort((prev, next) => {
                if(prev.name > next.name) return -1
                if(prev.name < next.name) return 1
                return 0
                })}}
            if(action.payload === 'desc'){
                return {...state, games: [...state.gamesAPI].sort((prev,next) => prev.rating - next.rating)}
            }
            if(action.payload === 'asc'){
                return {...state, games: [...state.gamesAPI].sort((prev,next) => next.rating - prev.rating)}
            }
            else {
                return {...state, games: state.gamesAPI.filter((game) => {
                    return game.genres.find((genre) => {
                        return genre.name === action.payload})
                })}    
            }
        default:
        return state;
    }    
}

export default reducer