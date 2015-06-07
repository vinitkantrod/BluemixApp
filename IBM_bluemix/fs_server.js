#!/usr/bin/env node
var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request,response) {
       var pathname = url.parse(request.url).pathname;
       console.log("request for "+pathname+ " received");
       
       fs.readFile(pathname.substring(1), function(err, data) {
            if (err) {
                //code
                console.log(err.stack);
            }
            else{
            response.writeHead(200,{'Content-type':'text/html'});
            response.write(data.toString());
            }
            response.end();
        });
    }).listen(8080);

console.log("server running at 127.0.0.1:8081");