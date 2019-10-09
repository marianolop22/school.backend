'use strict'

var app = require('./app');
var port = process.env.PORT || 3301
var conn = require('./services/conn.service');



// var mysql      = require('mysql');

// var pool  = mysql.createPool({
//   connectionLimit : 10,
//   host     : '165.227.182.13',
//   user     : 'school',
//   password : '$5381Santorini',
//   database : 'myschool'
// });



// pool.query('SELECT description from school where idschool = 20269336154', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].description);
// });


conn.pool.getConnection(function(err, connection) {
  if (err) throw err; // not connected!

  // Use the connection
  connection.query('SELECT 1+1 as result', function (error, results, fields) {
    // When done with the connection, release it.
    console.log('The solution is: ', results[0].result);
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});








// var connection = mysql.createConnection({
//   host     : '165.227.182.13',
//   user     : 'school',
//   password : '$5381Santorini',
//   database : 'myschool'
// });

// connection.connect();

// connection.query('SELECT description from school where idschool = 20269336154', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].description);
// });

// connection.end();

app.listen(port, () => console.log(`escuchando en el puerto ${port}`))