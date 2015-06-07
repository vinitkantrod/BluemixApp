var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/index.html', function (req, res) {
   //console.log("Got a GET request for the homepage");
   //res.sendFile('Hello GET');
   res.sendFile(__dirname + "/" + 'index.html');
});
app.post('/login',function(req,res){
        res.render('index');
    });

var response;
console.log("Hello");
app.get('/user_form', function(req,res) {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

console.log("world");
/*
app.use(express.static('public'));
// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('listing files');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})
*/

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("app listening at http://%s:%s", host, port)

});