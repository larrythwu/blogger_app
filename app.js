const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

//app always use JSON converter body
app.use(bodyParser.json());

//user from abnother origin can interact with the db
app.use(cors());
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//Connect to mongoDb
mongoose.connect(
  "mongodb+srv://user1:1234@cluster0.93j1j.mongodb.net/RESTApp?retryWrites=true&w=majority",
  () => console.log("connected to Db")
);

app.use(express.static("frontend/build"));

//Listen
const Port = process.env.PORT || 4000;

console.log("Listening on port: ", Port);
app.listen(Port);
