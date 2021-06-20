import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Random = styled.div`
color: white;
background-color: black;
margin-top: 40px;
width: 45%;
height: 20vh;
display: flex;
align-items: center;
`
const Img = styled.img`
width: 20%;
height: 100%;
border: 1px white solid;
margin-right: 30px;
`

function RandonGame({ randomGame }) {
    return (
        <Random>
            {randomGame && <Img alt="randomGame" src={`${randomGame.image}`}/>}
            <div>
            {randomGame && <h3>Have you tried the new {randomGame.name}? Check it out!</h3>}
            
            </div>
            
        </Random>
    )
}

const mapStateToProps = (state) => {
    return {
        randomGame: state.gamesAPI[Math.round(Math.random() * state.gamesAPI.length)]
    }
}

export default connect(mapStateToProps, null) (RandonGame)