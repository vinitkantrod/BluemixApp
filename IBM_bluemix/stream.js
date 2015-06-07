#!/usr/bin/env node
var fs = require('fs');
var data = ''
var writedata = "vinit has learned new ways to get motivate and see the world"
// -----------------  Read Stream
var readStream = fs.createReadStream("input.txt");
readStream.setEncoding("UTF8");

readStream.on("data", function(chunk) {
        data += chunk;
    });

readStream.on("error",function(){
        console.log(err.stack);
    });

readStream.on("end",function() {
        console.log(data);
    });
    
//  --------------  Write Stream
var writeStream = fs.createWriteStream("output.txt");

//writeStream.write(writedata,'UTF8');
//writeStream.end();

writeStream.on("finished", function() {
        console.log("write completed");
    });
writeStream.on("error", function() {
        console.log(err.stack);
    });

// --------------  piping the data
var pipeing = fs.createReadStream("input.txt");
readStream.pipe(writeStream);

console.log('program ended');