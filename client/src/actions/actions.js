import axios from 'axios'
import { GETVIDEOGAMES } from "./const";

export function getVideogames() {
    return function (dispatch) {
        axios.get('http://localhost:3001/videogames')
        .then((response) => {
             dispatch({type: GETVIDEOGAMES, payload: response.data})
        })    
    }
}    