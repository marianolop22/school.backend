var conn = require('../services/conn.service');
var Group = require ('../models/group.model');
var response = require('../services/response.service');
var utils = require ('../services/utils.service');

function addGroup(req, res) {

    var group = new Group ();
    group.set ( req.body )

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL addGroup (?,?,?,?)', [
                group.idSchool,
                group.idGroup,
                group.year,
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

function getGroup (req, res) {

    if ( !req.query.idGroup || !req.query.idSchool || !req.query.year) {
        return response.sendNotOk (res, null, '402');
    }
    
    var group = new Group ();
    group.set ( req.query ); 

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getGroup (?,?,?)', [
                group.idSchool,
                group.idGroup,
                group.year
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
                    group.set ( results[0][0]);
                    return response.sendOk ( res,group,null);
                }
            }
        });
    });
}


function getGroupList (req, res) {

    if ( !req.query.idSchool ) {
        return response.sendNotOk (res, null, '402');
    }
    
    var group = new Group ();
    group.set ( req.query ); 

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getGroupList (?,?)', [
                group.idSchool,
                group.year
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
                    return response.sendOk ( res,results[0],null);
                }
            }
        });
    });
}


function updateGroup(req, res) {

    var group = new Group ();
    group.set ( req.body )

    if ( !utils.checkDateForSP ( group, 'endDate' ) ) {
        return response.sendNotOk ( res, null, '403' );
    }

    conn.pool.getConnection( function( err, connection ) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL updateGroup (?,?,?,?,?)', [
                group.idSchool,
                group.idGroup,
                group.year,
                group.endDate, // ( endDate ) ? endDate.format('YYYY/MM/DD') : null,
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
    addGroup,
    getGroup,
    getGroupList,
    updateGroup
};