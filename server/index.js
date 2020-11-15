const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dupvj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
app.use(cors());
app.use(bodyParser.json());
const port = 5000;

//something
const client = new MongoClient(
    uri,
    { useUnifiedTopology: true },
    { useNewUrlParser: true },
    { connectTimeoutMS: 30000 },
    { keepAlive: 1 }
  );
  client.connect(err => {
    const collection = client.db("databaseName").collection("colectionName");
    console.log('database connected');
  });
  app.get("/", (req, res) => {
    res.send("Hello Team 74 , your server working!");
  });
  
  app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });