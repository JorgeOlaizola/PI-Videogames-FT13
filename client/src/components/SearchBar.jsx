import React from 'react'
import { connect } from 'react-redux'
import './styles/SearchBar.css'
import { getVideogames } from '../actions/actions'

function SearchBar({getVideogames, SearchVideogames}) {
    const [input, setInput] = React.useState({
        search: ''
    })

    const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }

    return (
        <div className="Search">
            <button onClick={() => SearchVideogames(`?name=${input.search}`)}>S</button>
            <input name='search' onChange={handleInputChange} value={input.search}></input>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVideogames: (query) => dispatch(getVideogames(query))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)