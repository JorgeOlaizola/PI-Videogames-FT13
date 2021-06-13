import React from 'react'
import Filters from './Filters'
import Videogames from './Videogames'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getVideogames, getGenres } from '../actions/actions'

const SourceCont = styled.div`
display:flex;
margin: 50px;
`

function GetGames({getVideogames, getGenres}) {
    React.useEffect(() => {
        getVideogames()
        getGenres()
    }, [])
    return (
        <div>
                <SourceCont>
                    <Filters/>
                    <Videogames/>
                </SourceCont>
    </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getVideogames: () => dispatch(getVideogames()),
        getGenres: () => dispatch(getGenres())
    }
}

export default connect (null, mapDispatchToProps) (GetGames)