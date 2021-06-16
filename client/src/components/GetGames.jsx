import React from 'react'
import Filters from './Filters'
import Videogames from './Videogames'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getVideogames, getGenres } from '../actions/actions'

const SourceCont = styled.div`
display:flex;
margin: 50px;
`

function GetGames({getVideogames, getGenres}) {
    React.useEffect(() => {
        getVideogames('')
        getGenres()
    }, [])
    return (
        <div>
                <SearchBar/>
                <SourceCont>
                    <Filters/>
                    <Videogames/>
                </SourceCont>
    </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getVideogames: (q) => dispatch(getVideogames(q)),
        getGenres: () => dispatch(getGenres())
    }
}


export default connect (null, mapDispatchToProps) (GetGames)