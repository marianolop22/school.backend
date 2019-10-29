var conn = require('../services/conn.service');
var People = require ('../models/people.model');
var response = require('../services/response.service');
var utils = require ('../services/utils.service');

function addPeople(req, res) {

    var people = new People ();
    people.set ( req.body )

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL addPeople (?,?,?,?)', [
                people.idSchool,
                people.idPeople,
                people.year,
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

function getPeople (req, res) {

    if ( !req.query.idPeople || !req.query.idSchool || !req.query.year) {
        return response.sendNotOk (res, null, '402');
    }
    
    var people = new People ();
    people.set ( req.query ); 

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getPeople (?,?,?)', [
                people.idSchool,
                people.idPeople,
                people.year
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
                    people.set ( results[0][0]);
                    return response.sendOk ( res,people,null);
                }
            }
        });
    });
}


function getPeopleList (req, res) {

    if ( !req.query.idSchool ) {
        return response.sendNotOk (res, null, '402');
    }
    
    var people = new People ();
    people.set ( req.query ); 

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL getPeopleList (?,?)', [
                people.idSchool,
                people.year
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


function updatePeople(req, res) {

    var people = new People ();
    people.set ( req.body )

    if ( !utils.checkDateForSP ( people, 'endDate' ) ) {
        return response.sendNotOk ( res, null, '403' );
    }

    conn.pool.getConnection( function( err, connection ) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL updatePeople (?,?,?,?,?)', [
                people.idSchool,
                people.idPeople,
                people.year,
                people.endDate, // ( endDate ) ? endDate.format('YYYY/MM/DD') : null,
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
    addPeople,
    getPeople,
    getPeopleList,
    updatePeople
};