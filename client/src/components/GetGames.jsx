import React from 'react'
import Filters from './Filters'
import Videogames from './Videogames'
import styled from 'styled-components'
import FiltersSearch from './FiltersSearch'
import { connect } from 'react-redux'
import { getGenres, orderBy, getVideogames } from '../actions/actions'

const SourceCont = styled.div`
display:flex;
margin: 50px;
`

function GetGames({ getGenres, orderBy, getVideogames }) {
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
    const order = (order) => {
        orderBy(order)
        setChange(false)
    }
    const SearchVideogames = (params) => {
        getVideogames(params)
        setChange(false)
    }
    return (
        <div>
                <FiltersSearch SearchVideogames={SearchVideogames} order={order} />
                <SourceCont>
                    <Filters />
                    {change && <Videogames/>}
                </SourceCont>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getGenres: () => dispatch(getGenres()),
        orderBy: (order) => dispatch(orderBy(order)),
        getVideogames: (q) => dispatch(getVideogames(q))
    }
}


export default connect (null, mapDispatchToProps) (GetGames)