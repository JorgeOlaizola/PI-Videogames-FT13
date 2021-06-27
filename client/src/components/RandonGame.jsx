import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Default from './styles/default.jpg'
import styled from 'styled-components'
import './styles/RandomGame.css'

const Random = styled.div`
color: white;
background: linear-gradient(0deg, rgba(35,7,131,1) 0%, rgba(24,9,112,1) 60%, rgba(35,7,131,1) 100%);
margin-top: 40px;
width: 40%;
height: 180px;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 0 1rem 1rem 0;
border: 1px solid white;
position: relative;
@media (max-width: 850px) {
    width: 65%
}
@media (max-width: 770px) {
    width: 80%
}
@media (max-width: 620px) {
    width: 90%
}
@media (max-width: 400px) {
    border-radius: 0;
    background: black;
}
`
const Img = styled.img`
width: 100%;
height: 100%;
border-right: 2px white solid;
@media (max-width: 400px){
    opacity: 0.5;
}    
`

function RandonGame({ randomGame }) {
    return (
        <Random>
            <div className="InfoImg">
            {randomGame && randomGame.image ? <Img alt="randomGame" src={`${randomGame.image}`}/> : <Img src={Default} alt="Default videogame image"/>}
            </div>
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