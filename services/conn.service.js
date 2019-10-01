var mysql      = require('mysql');

exports.pool  = mysql.createPool({
  connectionLimit : 10,
  host     : '165.227.182.13',
  user     : 'school',
  password : '$5381Santorini',
  database : 'myschool'
});