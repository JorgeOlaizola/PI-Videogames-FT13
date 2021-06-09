import React from 'react'
import Filters from './Filters'
import Videogames from './Videogames'
import styled from 'styled-components'

const SourceCont = styled.div`
display:flex;
margin: 50px;
`

export default function GetGames() {
    return (
        <div>
                <SourceCont>
                    <Filters/>
                    <Videogames/>
                </SourceCont>
    </div>
    )
}
