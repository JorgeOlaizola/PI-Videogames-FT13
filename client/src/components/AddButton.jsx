import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './styles/AddButton.css'

const Conteiner = styled.div`

`


export default function AddButton() {
    return (
        <div className="ABConteiner">
        <div className="AddBtn">
        <Link to="/home/addVideoGame" className="Btn">ADD VIDEOGAME</Link>
        </div>
        </div>
    )
}
