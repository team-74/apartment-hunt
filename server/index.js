const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uivsb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true });
client.connect(err => {
  const apartmentCollection = client.db("apartmentHuntDB").collection("apartmentCollection");
  const serviceCollection = client.db("apartmentHuntDB").collection("serviceCollection");
  console.log("db connected");
});


app.get('/', (req, res) => {
  res.send('Hello Apartment Hunt DB!')
})

app.listen(process.env.PORT || port);