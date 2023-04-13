let mongoose = require("mongoose");

let movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    posted_by: {
        type: String,
        required: true
    }
});


let Movie = module.exports = mongoose.model("Movie", movieSchema);