const Movie = require('../models/movie.model');

const getMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find();
        if(allMovies.length == 0){
            return res.status(404).json({message: 'no movies'}); 
         }
        return res.status(200).json(allMovies);        
    }
    catch (error) {
        console.log("doesnt work 500");
        return res.status(500).json(error);
    }
}

const getMoviesById = async (req, res) => {
    const {id} = req.params;
    const movies = await Movie.findById(id);
    return res.status(200).json(movies);
}

const getMoviesByTitle = async (req, res) => {
    try {
        const {title} = req.params;
        console.log(req.params);
        const movies = await Movie.find({title: title});
        if (movies.length == 0) {
            return res.status(404).json({message: `the title ${title} isnt found in any movie`})
        }
        return res.status(200).json(movies);        

    } catch (error) {
    return res.status(500).json(error);
    }
}

const getMoviesByGenre = async (req, res) => {
    try {
        const {genre} = req.params;
        const movies = await Movie.find({genre: genre});
        if (movies.length == 0) {
            return res.status(404).json({message: `the genre  ${genre} isn't found in any movie`})
        }
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMoviesFromYear = async (req, res) => {
    try {
        const {year} = req.params
        const movies = await Movie.find({year: {$gt: year}});
        console.log(movies);
        return res.status(200).json(movies);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postMovies = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        console.log(newMovie);
        const createdMovie = await newMovie.save();
        return res.status(200).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putMovies = async (req, res) => {
    try {
        const {id} = req.params; // id of existing movie to update
        const putMovie = new Movie(req.body); // new movie
        putMovie._id = id;
        const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true});
        if (!updatedMovie) {
            return updatedMovie.status(404).json({message: 'Movie with id ${} is updated'});  
        }
        return res.status(200).json(updatedMovie);        
    } catch (error) {
        return res.status(500).json(error);
    }

}

const deleteMovies = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteMovie = await Movie.findByIdAndDelete(id);
        console.log(deleteMovie);
        if (!deleteMovie) {
            return res.status(404).json({message: `movie with id ${id} doesn't exist`})
        }
        return deleteMovie.status(200).json(deleteMovie);        
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = {getMovies, getMoviesById, getMoviesByTitle, 
                getMoviesByGenre, getMoviesFromYear, postMovies, putMovies, 
                deleteMovies};