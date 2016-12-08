var os          = require('os');
const hostname  = os.hostname();

function success(req, message, reference_data){
  return buildResponse(req, true, message, reference_data);
}

function fail(req, message, reference_data){
	return buildResponse(req, false, message, reference_data);
}

function buildResponse(req, success, message, reference_data){
  var _response = {};
  	_response.success = (success == true);
  	_response.status = (success == true)?"success":"failure";

  if ( message )
  	_response.message = message;

  _response.actor = req.originalUrl;
  _response.hostname = hostname;
  _response.reference_data = reference_data;

  return _response;
}

function build(err, result, res, req, next, statusCodeWhenError){
  var status_code = (statusCodeWhenError > 200 && statusCodeWhenError <= 300)?status_code:500;
  if (err) {
      res.status(status_code).json(fail(req, null, err));
      return next(err);     
    }
    return res.json(success(req, null, result));
}

exports.build = build;
exports.success = success;
exports.fail = fail;