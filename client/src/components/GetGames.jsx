import React from 'react'
import Filters from './Filters'
import Videogames from './Videogames'
import SearchBar from './SearchBar'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getGenres, orderByRating, orderByName, getVideogames } from '../actions/actions'

const SourceCont = styled.div`
display:flex;
margin: 50px;
`

function GetGames({ getGenres, orderByName, orderByRating, getVideogames }) {
    const [change, setChange] = React.useState(true)
    React.useEffect(() => {
        getGenres()
        getVideogames('')
    }, [])
    React.useEffect(() => {
        return () => {
            setChange(true)
        }
    }, [change])
    const orderName = () => {
        orderByName()
        setChange(false)
    }
    const orderRating = () => {
        orderByRating()
        setChange(false)
    }
    const SearchVideogames = (params) => {
        getVideogames(params)
        setChange(false)
    }
    return (
        <div>
                <SearchBar SearchVideogames={SearchVideogames} />
                <SourceCont>
                    <Filters orderName={orderName} orderRating={orderRating} />
                    {change && <Videogames/>}
                </SourceCont>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getGenres: () => dispatch(getGenres()),
        orderByName: () => dispatch(orderByName()),
        orderByRating: () => dispatch(orderByRating()),
        getVideogames: (q) => dispatch(getVideogames(q))
    }
}


export default connect (null, mapDispatchToProps) (GetGames)