import React from 'react'
import { connect } from 'react-redux'
import { getVideogames } from '../actions/actions'
import Videogame from './Videogame'
import styled from 'styled-components'

const Conteiner = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
width: 65%;
background: linear-gradient(205deg, rgba(83,34,167,1) 0%, rgba(24,9,122,1) 35%, rgba(74,39,187,1) 100%);
margin-left: 100px;
`


function Videogames({games, getVideogames}) {

    return (
        <Conteiner>
          {games && games.map((g) => <Videogame name={g.name} genre={g.genre} image={g.image} id={g.id}/>)}
        </Conteiner>
    )
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVideogames: () => dispatch(getVideogames())
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (Videogames)