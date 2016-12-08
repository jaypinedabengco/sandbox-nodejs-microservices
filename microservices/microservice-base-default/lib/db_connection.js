var mysql       = require('mysql');
var config      = require('../app_config');

const pool      =    mysql.createPool({
    host     : config.db.host,
    user     : config.db.user,
    password : config.db.password,
    database : config.db.database,

    debug    : config.db.debug,
    connectionLimit : config.db.connectionLimit,    
    multipleStatements: config.db.multipleStatements
});

/**
 * Get connection from pool
 */
var getConnection = function(callback){
	pool.getConnection(function(err, connection){
    if ( err ){
      console.log('getConnection err', err);
      closeConnection(connection);
    }
		return callback(err, connection);
	});
}

/**
 * Close Connection
 */
var closeConnection = function(connection, callback){
	if ( connection && isReleased(connection) == false )
		connection.release();
  if ( callback instanceof Function )
    return callback();
}

/**
 * Create Connection & Start a Transaction
 */
var getTransactionalConnection = function(callback){
    getConnection(function(err, connection){
      if ( err )
        return callback(err);
      connection.beginTransaction(function(err){
        if ( err ){
          return connection.rollback(function() {
              return callback(err);
          });
        }
        return callback(null, connection);
      }); 
    });
}

/**
 * Rollback transactional connection
 */
var rollback = function(connection, callback){
  if ( connection ){
    return connection.rollback(function(){
        closeConnection(connection);
        if ( callback instanceof Function) 
          callback();
    });
  } else {
      if ( callback instanceof Function) 
        callback('connection is null');
  }
}

/**
 * Commit transactional connection
 */
var commit = function(connection, callback){
}

/**
 * Check if connection already released
 */
var isReleased = function(connection){
  return pool._freeConnections.indexOf(connection) > -1;
}

//exports.getConnection = getConnection;
//exports.closeConnection = closeConnection;

//transactional
exports.getTransactionalConnection = getTransactionalConnection;
exports.rollback = rollback;
exports.commit = commit;
exports.isReleased = isReleased;
