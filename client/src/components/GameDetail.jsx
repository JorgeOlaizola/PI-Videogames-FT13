import React from 'react'
import { connect } from 'react-redux';
import { getGameDetail } from '../actions/actions';
import { AiTwotoneStar } from "react-icons/ai";
import './styles/GameDetail.css'

function GameDetail({gameDetail, getGameDetail, id}) {
    React.useEffect(() => {
       getGameDetail(id)
      }, [id]);
    return (
        <div className="GDPosition">
            { gameDetail && 
            <div className="GDConteiner">
                <p className="GDTitle">{gameDetail && gameDetail.name}</p>
                {/* Box conteiner */}
                <div className="GDBoxConteiner">
                    {/* First box (1/2) */}
                    <img className="GD1Box" src={`${gameDetail.image}`} alt='Videogame image' />
                    {/* Second box (2/2)*/}
                    <div className="GD2Box">
                        <div className="GDGenres">
                            <p className="GDSizeBold">Genres</p>
                            <p style={{ margin: 0, marginBottom: '10px' }}>{gameDetail.genres && gameDetail.genres.map(g => <p style={{ margin: 0 }}>{g.name}</p>)}</p>
                        </div>
                        <div className="GDInfoCont">
                            <span className="GDSizeBold">Description</span>
                            <p>{gameDetail && gameDetail.description}</p>
                            <p>This game was released <span style={{ fontWeight: 'bolder' }}>{gameDetail.released}</span></p>
                        </div>
                    </div>
                </div>
                {/* Extra info cont */}
                <div className="GDExtraInfo">
                            <p><span style={{ fontWeight: 'bolder' }}>Rating: </span>
                            {gameDetail &&
                            Math.round(gameDetail.rating) >= 1 && <AiTwotoneStar/>}
                            {gameDetail &&
                            Math.round(gameDetail.rating) >= 2 && <AiTwotoneStar/>}
                            {gameDetail &&
                            Math.round(gameDetail.rating) >= 3 && <AiTwotoneStar/>}
                            {gameDetail &&
                            Math.round(gameDetail.rating) >= 4 && <AiTwotoneStar/>}
                            {gameDetail &&
                            Math.round(gameDetail.rating) === 5 && <AiTwotoneStar/>}
                            ({' ' + gameDetail.rating + ' '})</p>
                            <div className="GDPt"><span style={{ fontWeight: 'bolder' }}>Platforms:</span> <div className="GDPtCont">{gameDetail.platforms && gameDetail.platforms.map(p => <span>{p.platform.name}</span>)}</div></div>
                </div>            
            </div>}
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
        getGameDetail: (id) => dispatch(getGameDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (GameDetail)