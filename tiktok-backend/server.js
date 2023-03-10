import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Data from "./data.js";
import Videos from "./dbModel.js";

const connection_url =
  "mongodb+srv://zik:mahtab16@cluster1.wcllgvj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//db config

//api endpoints
app.get("/", (req, res) => res.status(200).send("hello World"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      //200 -> because it's downloading data
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  //POST request is to ADD data to the database
  //It will let us ADD a video DOCUMENT to the videos collection
  const dbVedios = req.body;

  Videos.create(dbVedios, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(port, (req, res) => console.log(`listening on localhost: ${port}`));
