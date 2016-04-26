var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("<div id='div_id'>Hello</div>");
});

app.listen(8080, function () {
  console.log('Example app listening on port', "0.0.0.0" + ":" + "8080");
});