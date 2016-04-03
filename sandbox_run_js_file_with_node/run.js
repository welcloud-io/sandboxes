var util=require('util');
var exec=require('child_process').exec;
exec('node to_run.js',function(err,stdout,stderr){
    console.log(stdout);
});