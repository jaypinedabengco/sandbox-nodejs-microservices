var http        = require('http'),
    express     = require('express')
    cors        = require('cors')
    bodyParser  = require('body-parser'),
    logger        = require('morgan'),

    response_builder    = require('./lib/utils/response_builder'), 
    service             = require('./lib/service');


var port = process.env.PORT || '3000';
var app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(logger('dev'));


/*************************************************
 * SET APIS
 *************************************************/

app.post('/', function(req, res, next){
    return res.json('im alive');
});

app.post('/test', function (req, res, next) {
    return response_builder.build(null, "hello", res, req, next, 500);
});

app.post('/test-fail', function (req, res, next) {
    return response_builder.build("fail", null, res, req, next, 500);
});

var server = http.createServer(app);

server.listen(port, function () {
    console.log("Server listening on port " + port);
});
