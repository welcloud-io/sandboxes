var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/send.html');
});

app.get('/count', function(req, res){
  res.sendFile(__dirname + '/count.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(8080, "0.0.0.0", function(){
  console.log("Chat server listening at", "0.0.0.0" + ":" + "8080");
});
