const express = require("express"); // importamos la liberia de express

const {getMovies, getMoviesById, getMoviesByTitle, 
        getMoviesByGenre, getMoviesFromYear, postMovies, 
        putMovies, deleteMovies} = require('../controllers/movie.controller');

const movieRoutes = express.Router();

movieRoutes.get('/', getMovies);
movieRoutes.get('/:id', getMoviesById);
movieRoutes.get('/title/:title', getMoviesByTitle);
movieRoutes.get('/genre/:genre', getMoviesByGenre);
movieRoutes.get('/year/:year', getMoviesFromYear);
movieRoutes.post('/', postMovies);
movieRoutes.put('/:id', putMovies);
movieRoutes.delete('/:id', deleteMovies);

module.exports = movieRoutes;

