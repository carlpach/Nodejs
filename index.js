const express = require("express"); // importamos la liberia de express
const {connect} = require('./src/utils/db');

const movieRoutes = require("../ex-movies1/src/api/routes/movie.routes");
const cinemaRoutes = require("../ex-movies1/src/api/routes/cinema.routes");

// "process" is part of express

const PORT = 7000; // assign a local port
const app = express(); // create a server with express
connect();

// config to receive jsons
app.use(express.json()) //Nos permiten recibir json e interpretarlos desde un front postman o lo que necesitemos
app.use(express.urlencoded({extended: false}));

app.use('/movies', movieRoutes); // movies is an endpoint
app.use('/cinemas', cinemaRoutes); // cinema is an endpoint

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
