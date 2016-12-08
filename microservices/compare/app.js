var http = require('http');
var express = require('express');

var port = process.env.PORT || '3000';
var app = express();

app.post('/api/compare/users', function (req, res, next) {
    return res.json([{ id: '1', name: 'johnDoe' }, { id: '2', name: 'janeDoe' }]);
});

app.post('/api/compare/addresses', function (req, res, next) {
    return res.json([{ "street": "test123" }, { "street": "test123" }]);
});

app.post('/api/search/compare/addresses', function (req, res, next) {
    return res.json([{ "street": "1test123" }, { "street": "1test123" }]);
});

var server = http.createServer(app);

server.listen(port, function () {
    console.log("Server listening on port " + port);
});