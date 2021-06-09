import React from 'react'
import { connect } from 'react-redux';
import { getGameDetail } from '../actions/actions';

function GameDetail({gameDetail, getGameDetail, id}) {
    React.useEffect(() => {
       getGameDetail(parseInt(id))
      }, [id]);
    return (
        <div>
            {gameDetail.name}
            {gameDetail.genre && gameDetail.genre.map(g => <div>{g.name}</div>)}
            <img src={`${gameDetail.image}`} alt='Videogame image'></img>
            {gameDetail.description}
            {gameDetail.released}
            {gameDetail.rating}
            {gameDetail.platforms && gameDetail.platforms.map(p => <div>{p.platform.name}</div>)}
        </div>
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