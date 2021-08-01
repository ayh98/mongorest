
const {Router} = require('express');
const movieRouter = Router();
const {createMovie, findMovie, updateMovie, deleteMovie} = require('./movies.controllers')

movieRouter.post('/movies', createMovie);
movieRouter.get('/movies/:title', findMovie);
movieRouter.put('/movies', updateMovie);
movieRouter.delete('/movies/:title', deleteMovie);

module.exports = movieRouter