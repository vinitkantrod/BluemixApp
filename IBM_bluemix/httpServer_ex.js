var express = require('express');
var app = express();
var fs = require("fs");

//  ------------- List no of Users
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "index.json", 'utf8', function (err, data) {
       console.log(data);
       res.end(data);
   });
})

// ---------------- Add Users
var user = {
   "user4" : {
      "name" : "rohit",
      "password" : "password",
      "profession" : "teacher",
      "id" : 4
   }
};
   
app.get('/addUser',function(req,res){
      fs.readFile(__dirname + '/'+'index.json',"UTF8",function(err,data){
         data = JSON.parse(data);
         data["user4"] = user["user4"];
         console.log(data);
         res.end(JSON.stringify(data));
         });
   });   

// -------------- Find deatails of users
app.get("/:id", function(req,res){
      fs.readFile(__dirname + '/' + 'index.json','utf8',function(err, data){
            data = JSON.parse(data);
            var users = user["user"+req.param.id];
            console.log(users);
            res.end(JSON.stringify(users));
         });
   });


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});