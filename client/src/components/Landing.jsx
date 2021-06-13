import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Conteiner = styled.div`
background-color: black;
color: white;
width: 100%;
height: 100vh;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Title = styled.h1`
font-size: 200px;
`

export default function Landing({getVideogames}) {
    return (
        <Conteiner>
            <Title>Welcome!</Title>
            <hr/>
            <Link to="/home"><button>Get started!</button></Link>
        </Conteiner>
    )
}
