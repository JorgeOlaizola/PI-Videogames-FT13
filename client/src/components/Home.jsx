import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import RandonGame from './RandonGame'
import './styles/Home.css'
import Logo from './styles/LogoHenry.png'

const Header = styled.header`
border: 4px #4d0066 solid;
height: 30vh;
display:flex;
justify-content: center;
align-items: center;
`
const RandomCont = styled.div`
display:flex;
justify-content: center;
align-items: center;
`


export default function Home() {
    return (
        <div>
            <Header className="DHeader">
                <Link to="/home"><img src={Logo}></img></Link>
            </Header>
            <RandomCont>
             <RandonGame/>
            </RandomCont>
            
        </div>
    )
}
