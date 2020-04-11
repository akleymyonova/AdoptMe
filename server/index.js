const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const db = require('./db/db');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const mongoClient = new MongoClient(db.url, { useUnifiedTopology: true });

const port = 3000;

mongoClient.connect((err, database) => {
  if(err) {
    return console.log(err);
  }
  require('./routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on port:' + port);
  })
})
