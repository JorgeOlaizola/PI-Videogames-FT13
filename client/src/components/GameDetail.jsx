import React from 'react'
import { connect } from 'react-redux';
import { getGameDetail } from '../actions/actions';
import styled from 'styled-components';

const Conteiner = styled.div`
width: 70%;
height: auto;
background-color: black;
color: white;
display: flex;
flex-direction: column;
align-items: center;

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

function GameDetail({gameDetail, getGameDetail, id}) {
    React.useEffect(() => {
       getGameDetail(parseInt(id))
      }, [id]);
    return (
        <Conteiner>
            <h3>{gameDetail.name}</h3>
            Genres:
            {gameDetail.genre && gameDetail.genre.map(g => <div>{g.name}</div>)}
            <Img src={`${gameDetail.image}`} alt='Videogame image'></Img>
            <hr/>
            <InfoCont>
                <p>Description: {gameDetail.description}</p>
                <p>Released on: {gameDetail.released}</p>
                <p>Rating: {gameDetail.rating}</p>
                <p>Platforms: {gameDetail.platforms && gameDetail.platforms.map(p => <div>{p.platform.name}</div>)}</p>
            </InfoCont>
        </Conteiner>
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