var http = require('http');
var express = require('express');

var port = process.env.PORT || '3000';
var app = express();

app.post('/api/search/user', function(req,res,next){
    return res.json({id:'1', name : 'johnDoe'});
});

app.post('/api/search/address', function(req,res,next){
    return res.json({"street" : "test1234"});
});

var server = http.createServer(app);

server.listen(port, function() {
   console.log("Server listening on port " + port);
});