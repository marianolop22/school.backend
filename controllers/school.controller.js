var conn = require('../services/conn.service');
var School = require ('../models/school.model');

function addSchool(req, res) {

    var school = new School ();
    school.set ( req.body )
    console.log (school);

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL addSchool (?,?,?,?,?,?)', [
                parseFloat( school.idSchool ) ,
                school.name,
                school.address,
                school.locality,
                school.province,
                parseFloat (school.idUser )
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            //console.log ( 'error', error);
            // Handle error after the release.
            if (error) {
                return res.status(400).json({
                    ok: false,
                    message: error
                });
            } else {
                return res.status(200).json({
                ok: true,
                message: 'se inserto ok'
                });
            }
        });
    });
}

function updateMainImage (req, res) {
    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL updateSchoolMainImage (?,?)', [
                parseFloat( req.body.idSchool ) ,
                req.body.urlImage
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            //console.log ( 'error', error);
            // Handle error after the release.
            if (error) {
                return res.status(400).json({
                    ok: false,
                    message: error
                });
            } else {
                return res.status(200).json({
                ok: true,
                message: 'se actualizo ok'
                });
            }
        });
    });
}

function updateShieldImage (req, res) {
    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL updateSchoolShieldImage (?,?)', [
                parseFloat( req.body.idSchool ) ,
                req.body.urlShield
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            //console.log ( 'error', error);
            // Handle error after the release.
            if (error) {
                return res.status(400).json({
                    ok: false,
                    message: error
                });
            } else {
                return res.status(200).json({
                ok: true,
                message: 'se actualizo ok'
                });
            }
        });
    });
}

function getSchool (req, res) {
    
    //console.log (req.query);
    var school = new School ();
    school.set ( req.query );
    //console.log (school);

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getSchool (?)', [
                parseFloat( school.idSchool )
            ],
            function (error, results) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            //console.log ( 'error', error);
            // Handle error after the release.
            if (error) {
                return res.status(400).json({
                    ok: false,
                    message: error
                });
            } else {
                school.set ( results[0][0]);
                return res.status(200).json({
                ok: true,
                school
                });
            }
        });
    });
}





module.exports = {
    addSchool,
    updateMainImage,
    updateShieldImage,
    getSchool

};