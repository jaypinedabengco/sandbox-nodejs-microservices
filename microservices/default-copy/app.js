var http = require('http');
var express = require('express');

var port = process.env.PORT || '3000';
var app = express();

app.post('/', function (req, res, next) {
    return res.json("hello");
});

var server = http.createServer(app);

server.listen(port, function () {
    console.log("Server listening on port " + port);
});
