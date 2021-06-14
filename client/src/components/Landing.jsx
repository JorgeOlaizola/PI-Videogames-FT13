import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
const GetStarted = styled.button`
width: 5%;
heihgt: auto;
`

const Title = styled.h1`
font-size: 200px;
`

export default function Landing() {
    return (
        <Conteiner>
            <Title>Welcome!</Title>
            <hr/>
           <GetStarted> <Link to="/home">Get started!</Link></GetStarted>
        </Conteiner>
    )
}
