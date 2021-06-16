import React from 'react'
import { connect } from 'react-redux'
import { getVideogames } from '../actions/actions'
import Videogame from './Videogame'
import styled from 'styled-components'

const Conteiner = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 30px;
flex-wrap: wrap;
width: 65%;
height: 90%; 
background: linear-gradient(205deg, rgba(83,34,167,1) 0%, rgba(24,9,122,1) 35%, rgba(74,39,187,1) 100%);
margin-left: 100px;
border-radius: 25px;
box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.2);
`


function Videogames({games}) {
    React.useEffect(() => {
        console.log('Se ordenó todo')
    })

    return (
        <Conteiner>
          {games && games.map((g) => <Videogame key={g.id} name={g.name} genres={g.genres} image={g.image} id={g.id}/>)}
        </Conteiner>
    )
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}


export default connect (mapStateToProps, null) (Videogames)