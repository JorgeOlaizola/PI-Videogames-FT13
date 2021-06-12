import React from 'react';
import { connect } from 'react-redux';
import { addVideogame } from '../actions/actions'
import './styles/AddVideogame.css'

function  AddVideoGame({addVideogame}) {
  const [input, setInput] = React.useState({
    name: '',
    description: '',
    RelYear: '',
    RelMonth: '',
    RelDay: '',
    rating: '',
    platforms: '',
    genres: '',
    image: ''
  });

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const handleInputImage = function(files) {
    setInput({
    ...input,
    image: 'hola'
    });
  }

  const handleSubmit = async function(e) {
    e.preventDefault()
    addVideogame(input)
  }

  return (
    <form className="DForm" onSubmit={handleSubmit}>
      <div className="DInput">
        <label>Name</label>
        <input  type="text" name="name" onChange={handleInputChange} value={input.name} />
      </div>
      <div className="DInput">
        <label>Description</label>
        <textarea  type="text" name="description"  onChange={handleInputChange} value={input.description}></textarea>
      </div>
      <div className="DInputRel">
        <label>Released on</label>
        <input  type="text" name="RelYear" onChange={handleInputChange} value={input.RelYear} placeholder="YYYY" />
        -
        <input  type="text" name="RelMonth" onChange={handleInputChange} value={input.RelMonth} placeholder="MM" />
        -
        <input  type="text" name="RelDay" onChange={handleInputChange} value={input.RelDay} placeholder="DD" />
      </div>
      <div className="DInput">
      <div className="DInput">
        <label>Image</label>
        <input  type="file" name="image" onChange={(event) => handleInputImage(event)} value={input.image} />
      </div>
        <label>Rating</label>
        <input  type="text" name="rating" onChange={handleInputChange} value={input.rating} />
      </div>
      <div className="DInput">
        <label>Platforms</label>
        <input  type="text" name="platforms" onChange={handleInputChange} value={input.platforms} />
      </div>
      <div className="DInput">
        <label>Genres</label>
        <input  type="text" name="genres" onChange={handleInputChange} value={input.genres} />
      </div>
      
      <input type="submit" />
    </form>
  )
}

function mapDispatchToProps (dispatch) {
    return {
        addVideogame: (input) => dispatch(addVideogame(input))
    }
  }
  
  export default connect (null, mapDispatchToProps)(AddVideoGame)