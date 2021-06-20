import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Default from './styles/default.jpg'
import styled from 'styled-components'
import './styles/randomGame.css'

const Random = styled.div`
color: white;
background: linear-gradient(0deg, rgba(35,7,131,1) 0%, rgba(24,9,112,1) 60%, rgba(35,7,131,1) 100%);
margin-top: 40px;
width: 35%;
height: 20vh;
display: flex;
align-items: center;
border-radius: 0 2rem 2rem 0;
border: 1px solid white;
`
const Img = styled.img`
width: 25%;
height: 100%;
border-right: 2px white solid;
margin-right: 30px;
`

function RandonGame({ randomGame }) {
    return (
        <Random>
            {randomGame && randomGame.image ? <Img alt="randomGame" src={`${randomGame.image}`}/> : <Img src={Default} alt="Default videogame image"/>}
            <div className="InfoCont">
            {randomGame && <h3 className="rgInfo">Have you tried the new <span className="rgTitle">{randomGame.name}</span>?</h3>}
            {randomGame && <Link className="gdLink" to={`/home/GameDetail/${randomGame.id}`}>Check it out!</Link>}
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