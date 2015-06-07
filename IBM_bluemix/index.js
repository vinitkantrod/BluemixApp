var http = require('http')  // Http server
var server = require('express')
var fs = require('fs')  // file system
var ee = require('events')  //  event emitter

//     ------------------  EventEmitter example
var obj = "vinit";
var eventEmitter = new ee.EventEmitter();
eventEmitter.on('new-user', function(data) {
        console.log('new-user '+data+' added to database\n');
    });
eventEmitter.emit('new-user',obj);

//--------------------  Http Server example
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end("hello world");
    }).listen(8080);

//  ------------------  File reading examples
fs.readFile('input.txt', function(err,data) {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
    });


var listener1 = function listener1() {         //  ----------------  EventEmitter class codes
  console.log("listener1 added");  
};

var listener2 = function listner2() {
    console.log("listener2 added");
};

eventEmitter.addListener("connections",listener1);
eventEmitter.on("connections",listener2);

var eventListener = new ee.EventEmitter.listenerCount(eventEmitter,"connections");
console.log(eventListener + " listener(s) listening to connection events");

eventEmitter.emit("connections");

eventEmitter.removeListener("connections", listener1);
console.log("listener1 was removed");

eventEmitter.emit("connections");         // ----------End of eventEmitter class

console.log("Program ended");

console.log("Server running at http://127.0.0.1:8080");