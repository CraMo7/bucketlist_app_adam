var express = require('express');
var app = express();
var path = require('path'); // node naitive module
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
  
app.use(express.static('client/build'));
// ^ lets express know where resources (bundle.js, styles.css, images etc.) are located on your server.

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});