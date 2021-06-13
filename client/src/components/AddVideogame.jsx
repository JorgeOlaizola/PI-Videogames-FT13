import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { addVideogame } from '../actions/actions'
import './styles/AddVideogame.css'

function  AddVideoGame({addVideogame, genres}) {
  const [input, setInput] = React.useState({
    name: '',
    description: '',
    date: '',
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
    const formData = new FormData()
    formData.append("file", files)
    formData.append("upload_preset", "upuyvmwv")
    axios.post('https://api.cloudinary.com/v1_1/jorgeleandroolaizola/image/upload', formData)
    .then(response => setInput({
      ...input,
      image: response.data.secure_url
      }))
    
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
        <input type="date" name="date" onChange={handleInputChange} value={input.date} ></input>
      </div>
      <div className="DInput">
      <div className="DInput">
        <label>Image</label>
        <input  type="file" name="image" onChange={(event) => handleInputImage(event.target.files[0])} />
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
        <input  type="option" name="genres" onChange={handleInputChange} value={input.genres} />
        <select>
          <optgroup label="Genres">
          {genres && genres.map(g => <option>{g.name}</option>)}
          </optgroup>
        </select>
      </div>
      
      <input type="submit" />
    </form>
  )
}

function mapDispatchToProps (dispatch) {
    return {
        addVideogame: (input) => dispatch(addVideogame(input)),   
    }
  }

function mapStateToProps (state) {
  return{
    genres: state.genres
  }
}
  
  export default connect (mapStateToProps, mapDispatchToProps)(AddVideoGame)