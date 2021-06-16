import React from 'react'
import Filters from './Filters'
import Videogames from './Videogames'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getGenres } from '../actions/actions'

const SourceCont = styled.div`
display:flex;
margin: 50px;
`

function GetGames({getVideogames, getGenres}) {
    React.useEffect(() => {
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
        getGenres: () => dispatch(getGenres())
    }
}


export default connect (null, mapDispatchToProps) (GetGames)