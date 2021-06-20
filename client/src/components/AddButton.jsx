import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './styles/AddButton.css'

const Conteiner = styled.div`
width: 20%;
height: 100px;
display:flex;
justify-content: center;
align-items: center;    
box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.2);
background: rgba(24,9,122,1);
border: 1px white solid;
`
const AddBtn = styled.div`
margin: 10px;
border-radius: 25px;
width: 100%;
height: 100%;
`

export default function AddButton() {
    return (
        <Conteiner>
        <AddBtn>
        <Link to="/home/addVideoGame" className="Btn">ADD VIDEOGAME</Link>
        </AddBtn>
        </Conteiner>
    )
}
