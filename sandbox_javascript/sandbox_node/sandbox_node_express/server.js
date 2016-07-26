var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get('/hello', function (req, res) {
  res.send("Hello");
});

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.post('/hello', function (req, res) {
  console.log(req.body)
  res.send("");
});

app.listen(8080, function () {
  console.log('Example app listening on port', "0.0.0.0" + ":" + "8080");
});