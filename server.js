var express = require('express');
var app = express();
var path = require('path'); // node naitive module
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
var url = "mongodb://localhost:27017/bucket";

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
  
app.get("/countries", function(req, res){
  MongoClient.connect(url, function(err, db){
    if (err){
      console.log(err);
      return;
    } // [end] if error check
    var collection = db.collection("countries");
    collection.find({}).toArray(function(err, docs){
      res.json(docs);
      db.close();
    });// [end] collection find()
  });// [end] MongoClient connect
});// [end] route

app.use(express.static('client/build'));
// ^ lets express know where resources (bundle.js, styles.css, images etc.) are located on your server.

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});