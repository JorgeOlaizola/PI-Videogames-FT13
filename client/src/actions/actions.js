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
    

    let post = {
        name: payload.name,
        description: payload.description,
        rating: payload.rating,
        image: payload.image,
        platforms: payload.platforms,
        genres: payload.genres,
        released: payload.RelYear + "-" + payload.RelMonth + "-" + payload.RelDay
    } 
    return function(){
        axios.post('http://localhost:3001/videogame', post)
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