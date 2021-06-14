require('dotenv').config();
const { Router } = require('express');
const express = require('express')
const axios = require('axios').default
const { API_KEY } = process.env;
const { sequelize, Op } = require('../db')
const { Videogame, Genres } = sequelize.models
const { v4: newUuid } = require("uuid");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/videogames', async function (req, res) {
    if(req.query.name){
    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.query.name}&page_size=15`)
    .then((response) => {
        var GamesAPI = response.data.results.map(game => { 
        return {
            name: game.name,
            genres: game.genres,
            image: game.background_image,
            id: game.id
        }})
        return GamesAPI
    })
    .then(async function (response) {
        const DBGames = await Videogame.findAll({
            where: { name: {[Op.iLike]: req.query.name + '%' }},
            attributes: { exclude: ['createdAt' , 'updatedAt']},
            include: {
                model: Genres,
                attributes: ["name"],
                through: {
                    attributes: []
                }    
            }
        })
        console.log(DBGames)
        return res.send([...DBGames, ...response])
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
                    genres: game.genres,
                    image: game.background_image,
                    id: game.id
                }})
            return APIGames
        })
        .then(async function (response) {
            const DBGames = await Videogame.findAll({
                attributes: { exclude: ['createdAt' , 'updatedAt']},
                include: {
                    model: Genres,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }    
                }
            })
            return res.send([...DBGames, ...response])
        }) 
        .catch((err) => {
            return res.send(err)
    })}
})

router.get('/videogames/:id', async (req, res) => {
    if(req.params.id){

        //Compara con la DB
        const DBGame = await Videogame.findByPk(req.params.id,
            {
            attributes: { exclude: ['createdAt' , 'updatedAt']},
            include: {
                    model: Genres,
                    attributes: ["name"],
                    through: {
                        attributes: []
                        }    
            }
            })
            .catch(() => console.log(req.params.id))
            if(DBGame) return res.send(DBGame)

        //Compara con la API
        axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=${API_KEY}`)
        .then((response) => {
            var game = response.data
            if(game) {
                var GameDetail = { 
                    name: game.name,
                    genres: game.genres,
                    image: game.background_image,
                    description: game.description_raw,
                    released: game.released,
                    rating: game.rating,
                    platforms: game.platforms,
                    id: game.id
                }  
                return res.send(GameDetail)
            }
        })
        .catch(() => res.send('Videogame not found'))
    }
})

router.get('/genres', (req, res) => {
    axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    .then((response) => {
        const genres = response.data.results.map(genre => genre = genre.name)
        return Promise.all(genres.map(genres => Genres.findOrCreate({where: {name: genres}})))      
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
        genres,
        id: newUuid()
    })    
    let theGenres
    if(Array.isArray(genres)){
        theGenres = await Promise.all(genres.map(g => Genres.findByPk(g)))
    }
    else{
        theGenres = await Genres.findByPk(genres)
    }
    await post.setGenres(theGenres)
    return res.json(post.id)
})


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
