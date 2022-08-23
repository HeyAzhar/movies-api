const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URL = "mongodb://localhost:27017/test_db";

const connectToDB = () =>
  mongoose
    .connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("---- connected to mongodb"))
    .catch((error) => console.log("---- Unable to connect to DB", error));

const disconnectDB = () =>
  mongoose
    .disconnect()
    .then(() => console.log("---- mongodb disconnect"))
    .catch((error) => console.log("---- Unable to disconnect DB", error));

module.exports = { connectToDB, disconnectDB };
