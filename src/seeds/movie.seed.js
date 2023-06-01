const mongoose = require("mongoose");

console.log("fnciona ssed");

const DB_URL = "mongodb+srv://root:root@cluster0.sti8ext.mongodb.net/?retryWrites=true&w=majority";

const Movie = require("../api/models/movie.model");
// const { isBuffer } = require("util");

const arrayMovies = [
  {
    'title': 'The Matrix',
    'director': 'Hermanas Wachowski',
    'year': 1999,
    'genre': 'Acción',
  },
  {
    'title': 'The Matrix Reloaded',
    'director': 'Hermanas Wachowski',
    'year': 2003,
    'genre': 'Acción',
  },
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  },
];


  mongoose.connect(DB_URL)
  .then( async () => {
    const allMovies = await Movie.find();
    if (allMovies.length > 0) {
        await Movie.collection.drop();
        console.log("Movies deleted");
    }
 
  })
  .catch((error) => console.log("error deleting movies", error))
  .then( async () => {
    // add seed of movies in our db mongo
    const movieMap = arrayMovies.map((movie) => new Movie(movie));
    await Movie.insertMany(movieMap);
    console.log("Movies inserted");
  })
  .catch((error) => console.log("error inserting movies", error))
  .finally(() => mongoose.disconnect());
