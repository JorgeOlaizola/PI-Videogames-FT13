import React from 'react'
import { Link } from 'react-router-dom'
import Filters from './Filters'
import Videogames from './Videogames'
import styled from 'styled-components'

const Header = styled.header`
background-color: blue;
height: 20vh;
`

const SourceCont = styled.div`
display:flex;
margin: 50px;
`

export default function Home() {
    return (
        <div>
            <Header>
                <h1>Henry Videogames</h1>
            </Header>
            <div>
                <SourceCont>
                    <Filters/>
                    <Videogames/>
                </SourceCont>
            </div>
        </div>
    )
}
