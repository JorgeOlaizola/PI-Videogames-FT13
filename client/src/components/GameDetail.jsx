import React from 'react'
import { connect } from 'react-redux';
import { getGameDetail } from '../actions/actions';
import styled from 'styled-components';

const Conteiner = styled.div`
width: 75%;
height: auto;
background: linear-gradient(205deg, rgba(83,34,167,1) 0%, rgba(24,9,122,1) 35%, rgba(74,39,187,1) 100%);
color: white;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 1rem;
box-shadow: 5px 10px black;

`

const Img = styled.img`
width: 70%;
height: auto;
`

const InfoCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
`

const Title = styled.h2`
text-transform: capitalize;
font-family: Arial, Helvetica, sans-serif;
`

const Genres = styled.div`
display: flex;
text-align: center;
flex-direction: raw;
justify-content: space-around;
width: 30%;
margin-bottom: 20px;
`

const Position = styled.div`
margin-top: 30px;
margin-bottom: 30px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

function GameDetail({gameDetail, getGameDetail, id}) {
    React.useEffect(() => {
       getGameDetail(parseInt(id))
      }, [id]);
    return (
        <Position>
        <Conteiner>
            <Title>{gameDetail.name}</Title>
            Genres:
            <Genres>
            {gameDetail.genres && gameDetail.genres.map(g => <div>{g.name}</div>)}
            </Genres>
            <Img src={`${gameDetail.image}`} alt='Videogame image'></Img>
            <hr/>
            <InfoCont>
                <p>Description: {gameDetail.description}</p>
                <p>This game was released {gameDetail.released}</p>
                <p>Rating: {gameDetail.rating}</p>
                <p>Platforms: {gameDetail.platforms && gameDetail.platforms.map(p => <div>{p.platform.name}</div>)}</p>
            </InfoCont>
        </Conteiner>
        </Position>
    )
}

const mapStateToProps = (state) => {
    return {
        gameDetail: state.gameDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGameDetail: (id) => dispatch(getGameDetail(parseInt(id)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (GameDetail)