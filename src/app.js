const express = require("express");
const cors = require("cors");
const { connectToDB } = require("./libs/mongoose");

const app = express();

connectToDB();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.disable("x-powered-by");

app.use(express.json());

app.use("/api/v1", require("./routes"));

module.exports = app;
