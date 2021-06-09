import axios from 'axios'
import { GETGAMEDETAIL, GETVIDEOGAMES } from "./const";

export function getVideogames() {
    return function (dispatch) {
        axios.get('http://localhost:3001/videogames')
        .then((response) => {
             dispatch({type: GETVIDEOGAMES, payload: response.data})
        })    
    }
}

export function addVideogame (payload) {
    return function(dispatch){
     axios.post('http://localhost:3001/videogame', payload)
    }
}

export function getGameDetail (id) {
    return function(dispatch){
        axios.get('http://localhost:3001/videogames/' + id)
        .then((response) => {
             dispatch({type: GETGAMEDETAIL, payload: response.data})
        })    
    }
}