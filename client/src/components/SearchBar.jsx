import React from 'react'
import { connect } from 'react-redux'
import './styles/SearchBar.css'
import { getVideogames } from '../actions/actions'
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

function SearchBar({getVideogames}) {
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
            <button className="searchButton" onClick={() => getVideogames(`?name=${input.search}`)}><IconContext.Provider value={{ color: "white", size: "14px"}}><FaSearch className="searchIcon"/></IconContext.Provider></button>
            <input className="searchInput" name='search' onChange={handleInputChange} value={input.search}></input>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVideogames: (query) => dispatch(getVideogames(query))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)