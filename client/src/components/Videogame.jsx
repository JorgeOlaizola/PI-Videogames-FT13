import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
width: 30%;
height: auto;
border: 1px black solid;
margin: 10px;
`

const Img = styled.img`
width: 100%;
height: auto;
`

export default function Videogame(props) {
    return (
        <Cont>
            <Img src={`${props.image}`}></Img>
            <h5>{props.name}</h5>
            {props.genre && props.genre.map(g => <div>{g.name}</div>)} 
        </Cont>
    )
}
