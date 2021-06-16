import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { orderByName, orderByRating } from '../actions/actions'
import './styles/Filters.css'

const Conteiner = styled.div`
width: 20%;
height: 100vh;
box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.2);
background: linear-gradient(205deg, rgba(83,34,167,1) 0%, rgba(24,9,122,1) 35%, rgba(74,39,187,1) 100%);
`
const FilterBtn = styled.div`
margin: 10px;
border-radius: 25px;
`

function Filters({orderByName, orderByRating}) {
    return (
        <Conteiner>
        <FilterBtn>
        <Link to="/home/addVideoGame" className="Btn">ADD VIDEOGAME</Link>
        </FilterBtn>
        <FilterBtn>
           <button className="Btn" onClick={orderByName}>ORDER BY NAME</button>
        </FilterBtn>
        <FilterBtn>
           <button className="Btn" onClick={orderByRating}>ORDER BY RATING</button>
        </FilterBtn>
        </Conteiner>
    )
}

const mapDispatchToProps = function (dispatch) {
    return{
        orderByName: () => dispatch(orderByName()),
        orderByRating: () => dispatch(orderByRating())
    }
}

export default connect(null, mapDispatchToProps)(Filters)