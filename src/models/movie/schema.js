const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    cast: [{ type: String, required: true }],
    genres: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = movieSchema;
