require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dns = require('dns');
const mongoose = require("mongoose");

// Basic Configuration
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

//Schema n Model
var urlSchema = new mongoose.Schema({
  id: Number,
  url: String
});

var urlModel = mongoose.model("url", urlSchema);

app.post('/api/shorturl', (req, res) => {
  const { url } = req.body;
  // Validate URL format
  try {
    const urlObj = new URL(url);
    dns.lookup(urlObj.hostname, (err) => {
      if (err) {
        res.json({ error: 'invalid URL' });
      } else {
        urlModel
          .find()
          .exec()
          .then(data => {
            new urlModel({
              id: data.length + 1,
              url: req.body.url
            })
              .save()
              .then(() => {
                res.json({
                  original_url: req.body.url,
                  short_url: data.length + 1
                });
              })
              .catch(err => {
                res.json(err);
              });
          });
      }
    });
  } catch (error) {
    res.json({ error: 'invalid URL' });
  }
});

//get
app.get("/api/shorturl/:number", function (req, res) {
  urlModel
    .find({ id: req.params.number })
    .exec()
    .then(url => {
      res.redirect(url[0]["url"]);
    });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
