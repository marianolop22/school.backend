var conn = require('../services/conn.service');
var GroupTemplate = require ('../models/groupTemplate.model');

function addGroupTemplate(req, res) {

    var groupTemplate = new GroupTemplate ();
    groupTemplate.set ( req.body )

    console.log ( req.body );

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL addGroupTemplate (?,?,?,?)', [
                parseFloat( groupTemplate.idSchool ) ,
                groupTemplate.idGroup,
                groupTemplate.description,
                parseFloat (req.idUser )
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            if (error) {
                return response.responseNotOk (res, error, null);
            } else {
                return response.responseOk ( res,null,'201');
            }
        });
    });
}

function getGroupTemplate (req, res) {

    if ( !req.query.idGroupTemplate ) {
        return response.responseNotOk (res, null, '402');
    }
    
    var grouptemplate = new GroupTemplate ();
    grouptemplate.set ( req.query );

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getGroupTemplate (?)', [
                parseFloat( grouptemplate.idGroupTemplate )
            ],
            function (error, results) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            //console.log ( 'error', error);
            // Handle error after the release.
            if (error) {
                return response.responseNotOk (res, error, null);
            } else {

                if ( results[0].length == 0 ) {
                    return response.responseNotOk (res, null, '401');
                } else { 
                    grouptemplate.set ( results[0][0]);
                    return response.responseOk ( res,grouptemplate,null);
                }
            }
        });
    });
}

function updateGroupTemplate(req, res) {

    var grouptemplate = new GroupTemplate ();
    grouptemplate.set ( req.body )

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL updateGroupTemplate (?,?,?,?,?,?)', [
                parseFloat( grouptemplate.idGroupTemplate ) ,
                grouptemplate.name,
                grouptemplate.address,
                grouptemplate.locality,
                grouptemplate.province
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
            //console.log('The solution is: ', results );
            connection.release();

            if (error) {
                return response.responseNotOk (res, error, null);
            } else {
                return response.responseOk ( res,null,'202');
            }
        });
    });
}


module.exports = {
    addGroupTemplate,
    getGroupTemplate,
    updateGroupTemplate
};