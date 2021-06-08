require('dotenv').config();
const { Router } = require('express');
const express = require('express')
const axios = require('axios').default
const { API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
let PostedVideogames = []
let addVideogames = function (videogame) {
    PostedVideogames.push(videogame)
}

const router = Router();

router.get('/videogames', (req, res) => {
    if(req.query.name){
    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.query.name}&page_size=15`)
    .then((response) => {
        var Games = response.data.results.map(game => { 
        return {
            name: game.name,
            genre: game.genres,
            image: game.background_image
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
            var Games = response.data.results.map(game => { 
            return {
                name: game.name,
                genre: game.genres,
                image: game.background_image
            }})
            return res.json(Games)
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
                platforms: game.platforms
            }
            return res.send(GameDetail)
        })
    }
})

router.get('/genres', (req, res) => {
    axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    .then((response) => {
        var Genres = response.data.results.map(genre => genre = genre.name)
        res.send(Genres)
    })
})

router.post('/videogame', (req, res) => {
        var newPost = req.body
        var post = {
            name: newPost.name,
            description: newPost.description,
            released: newPost.released,
            rating: newPost.rating,
        }
        if(newPost.genre){
            post[genres] = newPost.genre
        }
        if(newPost.platforms){
            post[platforms] = newPost.platforms
        }
        addVideogames(post)
        console.log(PostedVideogames)
        res.send(post)
})


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
