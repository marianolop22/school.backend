var conn = require('../services/conn.service');
var Classroom = require ('../models/classroom.model');

function addClassroom(req, res) {

    var classroom = new Classroom ();
    classroom.set ( req.body )

    console.log ( req.body );

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL addClassroom (?,?,?,?)', [
                parseFloat( classroom.idSchool ) ,
                classroom.idClassroom,
                classroom.description,
                parseFloat (req.idUser )
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            if (error) {
                return res.status(400).json({
                    ok: false,
                    message: error
                });
            } else {
                return res.status(200).json({
                ok: true,
                message: 'inserto ok'
                });
            }
        });
    });
}

function getClassroom (req, res) {

    if ( !req.query.idClassroom ) {
        return res.status(400).json({
            ok: false,
            message: error
        });
    }
    
    var classroom = new Classroom ();
    classroom.set ( req.query );

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getClassroom (?)', [
                parseFloat( classroom.idClassroom )
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
                classroom.set ( results[0][0]);
                return res.status(200).json({
                ok: true,
                classroom
                });
            }
        });
    });
}

function updateClassroom(req, res) {

    var classroom = new Classroom ();
    classroom.set ( req.body )

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL updateClassroom (?,?,?,?,?,?)', [
                parseFloat( classroom.idClassroom ) ,
                classroom.name,
                classroom.address,
                classroom.locality,
                classroom.province,
                parseFloat (req.idUser )
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            if (error) {
                return res.status(400).json({
                    ok: false,
                    message: error
                });
            } else {
                return res.status(200).json({
                ok: true,
                message: 'se actualizó ok'
                });
            }
        });
    });
}




module.exports = {
    addClassroom,
    getClassroom,
    updateClassroom
};