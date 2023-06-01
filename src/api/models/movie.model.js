const mongoose = require('mongoose');

// Obtain the Schema of mongoose
const Schema = mongoose.Schema;


const MovieSchema = new Schema (
    {
        title: {type: String, require: true},
        director: {type: String, require: true},
        year: {type: Number, require: true},
        genre: {type: String, require: false}
    }, {
        timestamps: true // generates creation date and update date
    }
)

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;