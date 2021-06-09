import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getVideogames } from '../actions/actions'

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

function Landing({getVideogames}) {
    return (
        <Conteiner>
            <Title>Welcome!</Title>
            <hr/>
            <Link to="/home"><button onClick={() => getVideogames()}>Get started!</button></Link>
        </Conteiner>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVideogames: () => dispatch(getVideogames())
    }
}

export default connect (null, mapDispatchToProps) (Landing)