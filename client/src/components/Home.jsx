import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RandonGame from './RandonGame'

const Header = styled.header`
background-color: blue;
height: 20vh;
`
const RandomCont = styled.div`
display:flex;
justify-content: center;
align-items: center;
`


export default function Home() {
    return (
        <div>
            <Header>
                <h1>Henry Videogames</h1>
            </Header>
            <RandomCont>
             <RandonGame/>
            </RandomCont>
            <Link to="/home/addVideoGame">FORM</Link>
            
        </div>
    )
}
