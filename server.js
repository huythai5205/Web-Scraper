const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/webScraper";

const app = express();

// Use morgan logger for logging requests
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static("dist"));

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

require('./routes/routes.js')(app.use(cors()));

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
