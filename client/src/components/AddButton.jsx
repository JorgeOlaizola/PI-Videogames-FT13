import React from 'react'
import { Link } from 'react-router-dom'
import './styles/AddButton.css'



export default function AddButton() {
    return (
        <div className="ABConteiner">
        <div className="AddBtn">
        <Link to="/home/addVideoGame" className="Btn">ADD VIDEOGAME</Link>
        </div>
        </div>
    )
}
