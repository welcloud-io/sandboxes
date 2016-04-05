var express = require('express');
var app = express();

function http_request_in_pure_node(res) {
  var http = require('http');

  var options = {
    host: 'www.welcloud.io',
    path: '/',
  };
  
  var callback = function(response) {
    var str = '';

    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      res.send(str);      
    });
  };

  http.request(options, callback).end();
}

function http_request_with_request_package(res) {
  var request = require('request');
  request('http://www.welcloud.io', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        res.send(body);
     }
  });
}

app.get('/', function (req, res) {
  http_request_in_pure_node(res);
});

app.get('/request', function (req, res) {
  http_request_with_request_package(res);
});

app.listen(8080, function () {
  console.log('Example app listening on port', "0.0.0.0" + ":" + "8080");
});