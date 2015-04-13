/**
 * New file
 * To take care of obtaining DB connection from the connection pool and executing queries.
 * Also logs SQL exceptions, results and releases the DB connection to the pool. 
 */
function execQuery (sql, params, callback) {
	
    var connPool = require('./mySqlConn').pool;
    
	connPool.getConnection(function (err, connection) {
		if (err) {
			console.log('MySql connection error: ' + err);
			callback(err, true);
			return;
		}
	            console.log('connected to mysql pool as id ' + connection.threadId);

        console.log("Query is >>>>>"+sql);
		
        var qResult = connection.query(sql, params, callback);
		
        
        qResult.on('error', function(err) {
			console.log('MySql query error: ' + err);
			callback(err, true);
		});
		
        qResult.on('result', function(rows) {
			console.log('Got result from DB');
			callback(false, rows);
		});
		
        qResult.on('end', function() {
			console.log('Going to release DB connection to the Pool');
			connection.release();
		});
	});
}

exports.execQuery=execQuery;