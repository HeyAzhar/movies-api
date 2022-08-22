const mongoose = require("mongoose");
const movieSchema = require("./schema");

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
