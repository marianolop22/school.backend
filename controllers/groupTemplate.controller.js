var conn = require('../services/conn.service');
var GroupTemplate = require ('../models/groupTemplate.model');
var response = require('../services/response.service');
var utils = require ('../services/utils.service');

function addGroupTemplate(req, res) {

    var groupTemplate = new GroupTemplate ();
    groupTemplate.set ( req.body )

    console.log ( req.body );

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL addGroupTemplate (?,?,?,?)', [
                groupTemplate.idSchool,
                groupTemplate.idGroup,
                groupTemplate.description,
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

function getGroupTemplate (req, res) {

    if ( !req.query.idGroup || !req.query.idSchool ) {
        return response.sendNotOk (res, null, '402');
    }
    
    var groupTemplate = new GroupTemplate ();
    groupTemplate.set ( req.query ); 

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getGroupTemplate (?,?)', [
                groupTemplate.idSchool,
                groupTemplate.idGroup
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
                    groupTemplate.set ( results[0][0]);
                    return response.sendOk ( res,groupTemplate,null);
                }
            }
        });
    });
}


function getGroupTemplateList (req, res) {

    if ( !req.query.idSchool ) {
        return response.sendNotOk (res, null, '402');
    }
    
    var groupTemplate = new GroupTemplate ();
    groupTemplate.set ( req.query ); 

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getGroupTemplateList (?)', [
                groupTemplate.idSchool
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


function updateGroupTemplate(req, res) {

    var grouptemplate = new GroupTemplate ();
    grouptemplate.set ( req.body )

    if ( !utils.checkDateForSP ( grouptemplate, 'endDate' ) ) {
        return response.sendNotOk ( res, null, '403' );
    }

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL updateGroupTemplate (?,?,?,?,?)', [
                grouptemplate.idSchool,
                grouptemplate.idGroup,
                grouptemplate.description,
                grouptemplate.endDate,
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
    addGroupTemplate,
    getGroupTemplate,
    getGroupTemplateList,
    updateGroupTemplate
};