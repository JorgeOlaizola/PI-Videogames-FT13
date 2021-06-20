import axios from 'axios'
import { GETGAMEDETAIL, GETGENRES, GETVIDEOGAMES, ORDERBY,  } from "./const";

export function getVideogames(query) {
    return function (dispatch) {
        axios.get('http://localhost:3001/videogames' + query)
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
        platforms: [{platform: {name: payload.platforms}}],
        genres: payload.genres,
        released: payload.date
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

export function getGenres () {
    return function(dispatch){
        axios.get('http://localhost:3001/genres')
        .then((response) => {
            dispatch({type: GETGENRES, payload: response.data})
        })
    }
}

export function orderBy(order) {
    return function (dispatch) {
        dispatch({type: ORDERBY, payload: order})
    }
}
