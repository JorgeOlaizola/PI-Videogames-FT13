import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RandonGame from './RandonGame'
import './styles/Home.css'
import Logo from './styles/LogoHenry.png'

const Header = styled.header`
height: 35%;
display:flex;
justify-content: center;
align-items: center;
`
const RandomCont = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 30%;
`

const HomeDiv = styled.div`
width: 100%;
height: 80%;
`


export default function Home() {
    return (
        <HomeDiv>
            <Header className="DHeader">
                <Link to="/home"><img src={Logo} alt='Henry Videogames'></img></Link>
            </Header>
            <RandomCont>
             <RandonGame/>
            </RandomCont>
        </HomeDiv>
    )
}
