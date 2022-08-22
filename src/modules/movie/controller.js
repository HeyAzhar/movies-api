const axios = require("axios").default;
const Movie = require("../../models/movie/services");

exports.create = async (req, res) => {
  try {
    const jsonUrl =
      "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";

    const { data } = await axios.get(jsonUrl);

    data?.length > 0 && Movie.insertMany(data);

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(409).send({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

exports.get = async (req, res) => {
  try {
    const movie = await Movie.get(req.body);

    res.status(200).send({ success: true, data: { ...movie } });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
