require('dotenv').config();
const { Router } = require('express');
const express = require('express')
const axios = require('axios').default
const { API_KEY } = process.env;
const { sequelize } = require('../db')
const { Videogame, Genres } = sequelize.models
const { v4: newUuid } = require("uuid");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/videogames', async function (req, res) {
    if(req.query.name){
    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.query.name}&page_size=15`)
    .then((response) => {
        var Games = response.data.results.map(game => { 
        return {
            name: game.name,
            genre: game.genres,
            image: game.background_image,
            id: game.id
        }})
        return res.send(Games)
    })
    .catch(() =>{
        return res.status(404).send('The game you are looking for does not exist or is not registered in our database')
    })
    }
    if(!req.query.name){
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=15`)
        .then((response) => {
            var APIGames = response.data.results.map(game => { 
                return {
                    name: game.name,
                    genre: game.genres,
                    image: game.background_image,
                    id: game.id
                }})
            return APIGames
        })
        .then(async function (response) {
            const DBGames = await Videogame.findAll()
            await DBGames.map(videogame => videogame[genres] = videogame.getGenre())
            res.json([...DBGames, ...response])
        }) 
        .catch((err) => {
            return res.send(err)
    })}
})

router.get('/videogames/:id', (req, res) => {
    if(req.params.id){
        axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=${API_KEY}`)
        .then((response) => {
            var game = response.data
            var GameDetail = { 
                name: game.name,
                genre: game.genres,
                image: game.background_image,
                description: game.description_raw,
                released: game.released,
                rating: game.rating,
                platforms: game.platforms,
                id: game.id
            }
            return res.send(GameDetail)
        })
    }
})

router.get('/genres', (req, res) => {
    axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    .then((response) => {
        const genres = response.data.results.map(genre => genre = genre.name)
        return Promise.all(genres.map(genres => Genres.create({name: genres})))      
    })
    .then(() => {
        return Genres.findAll()
    })
    .then((response) => {
        res.send(response.map(g => {return {
            name: g.name,
            id: g.id
        }}))
    })
})

router.post('/videogame', async function PostVideogame (req, res) {
    const { name, description, released, rating, platforms, genres, image } = req.body;
    const post = await Videogame.create({
        name,
        description,
        released: released || '0000-00-00',
        rating: rating || 0,
        platforms,
        image,
        id: newUuid()
    })    
    let theGenres
    if(Array.isArray(genres)){
        theGenres = await Promise.all(genres.map(g => Genres.findByPk(g.id)))
    }
    else{
        theGenres = await Genres.findByPk(genres.id)
    }
    await post.setGenres(theGenres)
    return res.json(post.id)
})


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
