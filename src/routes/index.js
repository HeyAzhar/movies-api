const { Router } = require("express");

const movieRouter = require("../modules/movie/router.js");

const router = Router();

router.use("/movie", movieRouter);

module.exports = router;
