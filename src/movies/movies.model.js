const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    actor:{
        type: String
    },
    watched: {
        type: Boolean,
        default: false
    },
    rating: {
        type: String,
        default: "N/A"
    },
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
