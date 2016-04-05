var fs = require('fs');
var exec=require('child_process').exec;

function puts(err,stdout,stderr) {
    if(err) { return console.log(err);}    
    console.log(stdout);
}

function runfile(err) {
    if(err) { return console.log(err);}
    console.log("The file was saved!");    
    exec('node file_to_run.js',puts);    
    console.log("The file was executed!");    
}

fs.writeFile("./file_to_run.js", "console.log('Hello 2');", runfile)