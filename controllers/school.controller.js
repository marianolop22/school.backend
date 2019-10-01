var conn = require('../services/conn.service');

function addSchool(req, res) {

    var school = req.body;
    console.log ( school );

    conn.pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
      
        // Use the connection
        connection.query('CALL addSchool (?,?,?,?,?,?)', [
                parseFloat( school.idSchool ) ,
                school.description,
                school.address,
                school.locality,
                school.province,
                parseFloat (school.idUser )
            ],
            function (error, results, fields) {
          // When done with the connection, release it.
        console.log('The solution is: ', results );
        connection.release();

        
        // Handle error after the release.
        if (error) throw error;
        
        return res.status(200).json({
        ok: true,
        message: 'se inserto ok'
        });
          // Don't use the connection here, it has been returned to the pool.
        });
      });
      

}

module.exports = {
    addSchool
};