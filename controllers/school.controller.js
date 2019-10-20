var conn = require('../services/conn.service');
var School = require ('../models/school.model');
var response = require('../services/response.service');

function addSchool(req, res) {

    var school = new School ();
    school.set ( req.body )

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL addSchool (?,?,?,?,?,?)', [
                school.idSchool,
                school.name,
                school.address,
                school.locality,
                school.province,
                req.idUser
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            if (error) {
                return response.sendNotOk (res, error, null);
            } else {
                return response.sendOk ( res,null,'201');
            }
        });
    });
}

function updateImage (req, res) {

    urlImage = (req.body.urlImage) ? req.body.urlImage : null;
    urlShield = (req.body.urlShield) ? req.body.urlShield : null;

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL updateSchoolImage (?,?,?,?)', [
                req.body.idSchool,
                urlImage,
                urlShield,
                req.idUser
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            //console.log ( 'error', error);
            // Handle error after the release.
            if (error) {
                return response.sendNotOk (res, error, null);
            } else {
                return response.sendOk ( res,null,'202');
            }
        });
    });
}

function getSchool (req, res) {

    if ( !req.query.idSchool ) {
        return response.sendNotOk (res, null, '402');
    }
    
    var school = new School ();
    school.set ( req.query );

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getSchool (?)', [
                school.idSchool
            ],
            function (error, results) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            //console.log ( 'error', error);
            // Handle error after the release.
            if (error) {
                return response.sendNotOk (res, error, null);
            } else {

                if ( results[0].length == 0 ) {
                    return response.sendNotOk (res, null, '401');
                } else { 
                    school.set ( results[0][0]);
                    return response.sendOk ( res,school,null);
                }
            }
        });
    });
}

function updateSchool(req, res) {

    var school = new School ();
    school.set ( req.body )

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL updateSchool (?,?,?,?,?,?,?)', [
                school.idSchool,
                school.name,
                school.address,
                school.locality,
                school.province,
                school.endDate,
                req.idUser
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            if (error) {
                return response.sendNotOk (res, error, null);
            } else {
                return response.sendOk ( res,null,'202');
            }
        });
    });
}




module.exports = {
    addSchool,
    getSchool,
    updateImage,
    updateSchool

};