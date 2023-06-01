const mongoose = require('mongoose');

// Obtain the Schema of mongoose
const Schema = mongoose.Schema;

const CinemaSchema = new Schema (
    {
        name: {type: String, require: true},
        location: {type: String, require: true},
        cartelera: [{type: Schema.Types.ObjectId, ref: 'movie'}]
    }, {
        timestamps: true
    }
)

const Cinema = mongoose.model("cinema", CinemaSchema);

module.exports = Cinema;

