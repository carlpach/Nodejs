const Cinema = require("../models/cinema.model");

const getCinemas = async (req, res) => {
    try {
        const cinemas = await Cinema.find().populate("cartelera", "year director"); // (camp, projection)
    return res.status(200).json(cinemas);
    } catch (error) {
        return res.status(500).json(error);
}
}

const getCinemasById = async (req, res) => {
    const {id} = req.params;
    const cinema = await Cinema.findById(id);
    return res.status(200).json(cinema);
}

const getCinemaByLocation = async (req, res) => {
    const {location} = req.params;
    const cinema = await Cinema.find({location: location});
    return res.status(200).json(cinema);
}

const postCinemas = async (req, res) => {
    const newCinema = new Cinema(req.body);
    console.log(newCinema);
    const createdCinema = await newCinema.save();
    return res.status(200).json(createdCinema);
}

const putCinemas = async (req, res) => {
    try {
        const {id} = req.params;
        const newCinema = new Cinema(req.body);
        newCinema._id = id;
        const updatedCinema = await Cinema.findByIdAndUpdate(id, newCinema);   
        if (!updatedCinema) {
            return updatedCinema.status(404).json({message: `Cinema with id ${id} is updated`});  
        }     
        return res.status(200).json(updatedCinema);
    } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }


}

const deleteCinemas = async (req, res) => {
    const {id} = req.params;
    const deleteCinema = await Cinema.findByIdAndDelete(id);
    return res.status(200).json(deleteCinema);
}

module.exports = {getCinemas, getCinemasById, getCinemaByLocation, 
                    postCinemas, putCinemas, deleteCinemas};


