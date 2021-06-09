import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './styles/Filters.css'

const FilterCont = styled.div`
width: 20%;
height: 100vh;
background: linear-gradient(205deg, rgba(83,34,167,1) 0%, rgba(24,9,122,1) 35%, rgba(74,39,187,1) 100%);
margin: 10px;
`

export default function Filters() {
    return (
        <FilterCont>
        <Link to="/home/addVideoGame" className="LinkStyle">ADD VIDEOGAME</Link>
        </FilterCont>
    )
}
