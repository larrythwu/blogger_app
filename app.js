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

//Routes
app.get("/", (req, res) => {
  res.send("Home");
});

//Connect to mongoDb
mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECTION, () =>
  console.log("connected to Db")
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}
//Listen
const Port = process.env.PORT || 4000;
app.listen(Port);
