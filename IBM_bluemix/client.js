#!/usr/bin/env node

var http = require("http");
var option = {
  host : 'localhost',
  port : '8080',
  path : '/index.html'
};

var callback = function(response){
        var body = ''
        response.on('data', function(data) {
            body += data 
            });
        response.on('end',function(){
                console.log(body);
            });
    }
    
var req = http.request(option,callback);
req.end();