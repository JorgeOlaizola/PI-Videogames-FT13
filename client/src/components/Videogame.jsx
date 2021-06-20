import React from 'react'
import { Link } from 'react-router-dom'
import Default from './styles/default.jpg'
import './styles/Videogame.css'


export default function Videogame(props) {
    return (
        <div className="Conteiner">
           {props.image ? <img src={`${props.image}`} alt="Videogame image" className="Img"></img> : <img src={Default} alt="Videogame image" className="Img"></img>}
            <div className="title">{props.name}</div>
            <div className="infoCont">
            {props.genres && props.genres.map((g, i) => {
            if(i < 3){
            return <p>{g.name}</p>
            }
            })}
            { props.id && <button><Link to={`/home/GameDetail/${props.id}`} className="Link">GameDetail</Link></button>}
            </div>
        </div>
    )
}
