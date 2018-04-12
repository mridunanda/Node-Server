var express = require("express");
var myParser = require("body-parser");
var app = express();
var port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/tagup");

var deviceSchema = new mongoose.Schema({
  identifier: String,
  timestamp: String,
  temp: Number
});

var User = mongoose.model("DataInputs", deviceSchema);

app.post("/sensor", (req, res) => {
	var myData = new User(req.body);
	myData.save()
  .then(item => {
          res.send("Item saved to database\n");
      })
  .catch(err => {
          res.send("Unable to save to database");
      });
});

app.listen(port, () => {
  console.log("Server listening on port\n " + port);
});