#!/usr/bin/env node
var fs = require("fs");

console.log("opening file shortly");
fs.stat("input.txt",'r+', function(err, fd) {
     if (err) {
        console.log(err.stack);
     }
     console.log(stats);
    });

console.log("got file sucessfully");
console.log("is File ? "+ stats.isFile());
console.log("is Directory ? "+ stats.isDirectory());