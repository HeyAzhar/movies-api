const { Router } = require("express");
const { validate } = require("../../middlewares/schema");
const controller = require("./controller");
const { search } = require("./contract");

const movieRouter = Router();

movieRouter.post("/", validate(search), controller.get);
movieRouter.get("/create", controller.create);

module.exports = movieRouter;
