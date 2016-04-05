var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var fs = require('fs');
  var exec=require('child_process').exec;
  
  var code_to_execute = "console.log('Hello');"
  
  function puts(err,stdout,stderr) {
      if(err) { res.send(stderr); return; }
      res.send(stdout);
      console.log("The result was returned!");
  }
  
  function runfile(err) {
      if(err) { return console.log(err);}
      console.log("The file was saved!");
      
      exec('node file_to_run.js',puts);    
      console.log("The file was executed!");    
  }
  
  fs.writeFile("./file_to_run.js", code_to_execute, runfile)
});

app.listen(8080, function () {
  console.log('Example app listening on port', "0.0.0.0" + ":" + "8080");
});
