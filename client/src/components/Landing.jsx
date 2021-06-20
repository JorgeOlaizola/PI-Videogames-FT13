import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './styles/LogoHenry.png'
import './styles/Landing.css'

const Conteiner = styled.div`
color: white;
width: 100%;
height: 100vh;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


export default function Landing() {
    return (
        <Conteiner>        
            <img src={Logo} alt="Logo"/>
            <h1 className="h1title">Welcome!</h1>
            <h3 className="h3text">This is a project designed with React, Redux, Sequelize and Express.</h3>
            <h3 className="h3text">For development I used the video game API rawg.io</h3>
           <Link to="/home" className="link">Get started!</Link>
        </Conteiner>
    )
}
