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
background-color: red;
margin-left: 100px;
`


function Videogames({games, getVideogames}) {

    return (
        <Conteiner>
            <button onClick={() => getVideogames()}></button>
          {games && games.map((g) => <Videogame name={g.name} genre={g.genre} image={g.image}/>)}
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