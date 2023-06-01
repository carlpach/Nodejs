const express = require("express"); // importamos la liberia de express

const {getCinemas, getCinemasById, getCinemaByLocation, 
    postCinemas, putCinemas, deleteCinemas} = require("../controllers/cinema.controller");

cinemaRoutes = express.Router();

cinemaRoutes.get("/", getCinemas);
cinemaRoutes.get("/:id", getCinemasById);
cinemaRoutes.get("/location/:location", getCinemaByLocation);
cinemaRoutes.post("/",postCinemas);
cinemaRoutes.put("/:id", putCinemas);
cinemaRoutes.delete("/:id", deleteCinemas);


module.exports = cinemaRoutes;
