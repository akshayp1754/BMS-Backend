// main backend file
require("dotenv").config();
const MovieModel = require("./database/movies");
const UserModel = require("./database/Users");

const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// import the mongoose module
var mongoose = require("mongoose");
// setup default mongoose connection
var mongoDB =
  "mongodb+srv://akshay_pawar:akshayp1754@cluster0.whccscg.mongodb.net/bookmyshow?retryWrites=true&w=majority";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connection established"));

// http://localhost:5000/

app.get("/", (req, res) => {
  return res.json({ welcome: `to my backend software for the bookmyshow` });
});

// http://localhost:5000/movies

app.get("/movies", async (req, res) => {
  const getAllMovies = await MovieModel.find();
  return res.json(getAllMovies);
});

// http://localhost:5000/movies/:title

app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const getMovie = await MovieModel.findOne({ _id: id });
  return res.json(getMovie);
});

// http://localhost:5000/user-register

app.post("/user-register", async (req, res) => {
  const addNewUser = await UserModel.create(req.body);
  return res.json({ userAdded: addNewUser, message: "User was added" });
});

app.listen(5000, () => {
  console.log("my express app is running ...");
});
