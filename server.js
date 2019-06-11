var express = require('express');
var http = require('http');

var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser);

app.get('/', function (req, res) {
  console.log(req.body);
  res = res.status(200);
  if (req.get('Content-Type')) {
    console.log("Content-Type: " + req.get('Content-Type'));
    res = res.type(req.get('Content-Type'));
  }
  res.send(req.body);
});

app.post('/', function (req, res) {
  console.log(req.body);
  res = res.status(200);
  if (req.get('Content-Type')) {
    console.log("Content-Type:" + req.get('Content-Type'));
    res = res.type(req.get('Content-Type'));
  }
  
});

http.createServer(app).listen(7000);