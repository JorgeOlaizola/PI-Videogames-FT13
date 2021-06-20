import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Videogame.css'


export default function Videogame(props) {
    return (
        <div className="Conteiner">
            <img src={`${props.image}`} alt={`${props.name} img`}className="Img"></img>
            <div className="title">{props.name}</div>
            <div className="infoCont">
            {props.genres && props.genres.map(g => <p>{g.name}</p>)}
            { props.id && <button><Link to={`/home/GameDetail/${props.id}`} className="Link">GameDetail</Link></button>}
            </div>
        </div>
    )
}
