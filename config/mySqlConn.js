var mysql_pool = require('mysql');
var dbconfig = require('/srv/www/simplenodedb/shared/config/opsworks.js');

exports.db = {
  "host" : "",
    "port" : 3306,
    "user" : "",
    "password" : "",
    "database" : "sampledb",
    "connectionLimit" : 100}
/* MYSQL RDS */
var pool  = mysql_pool.createPool({
	// host     : 'demoapp.cnfiarybvhfe.us-west-1.rds.amazonaws.com',
	// user     : 'root',
	// password : 'rootroot',
	// port     : '3306',
	// database : 'sampledb',
	// connectionLimit : '10'

  host: dbconfig.db['host'],
  user: dbconfig.db['username'],
  password: dbconfig.db['password'],
  port: dbconfig.db['port'],
  database: dbconfig.db['database']
});


/* LOCAL MYSQL CONNECTION*/
/*var pool  = mysql_pool.createPool({

	host     : 'localhost',
	user     : 'root',
	password : 'root',
	port     : '3306',
	database : 'users',
	connectionLimit : '10'
});
*/
exports.pool = pool;
