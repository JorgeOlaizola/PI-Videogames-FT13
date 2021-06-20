import React, { useState } from 'react'
import { connect } from 'react-redux'
import Videogame from './Videogame'
import Pagination from './Pagination'
import styled from 'styled-components'

const Conteiner = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 50px;
padding-top: 70px;
flex-wrap: wrap;
width: 65%;
height: 90%; 
background: linear-gradient(205deg, rgba(83,34,167,1) 0%, rgba(24,9,122,1) 35%, rgba(74,39,187,1) 100%);
margin-left: 100px;
border-radius: 25px;
box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.2);
position: relative;
`


function Videogames({games}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [cardPerPage] = useState(15)

    const indexOfLastCard = currentPage * cardPerPage
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    var currentCards = games.slice(indexOfFirstCard, indexOfLastCard)

    const paginate = (pageNumber) => {
         setCurrentPage(pageNumber)
    }

    return (
        <Conteiner>
        <Pagination cardPerPage={cardPerPage} totalCards={games.length} paginate={paginate} />
          {currentCards && currentCards.map((g) => <Videogame key={g.id} name={g.name} genres={g.genres} image={g.image} id={g.id}/>)}
        </Conteiner>
    )
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}



export default connect (mapStateToProps, null) (Videogames)