var SEED = require('../config/config').SEED;
var jwt = require('jsonwebtoken');

exports.checkToken = function(req, res, next) {

    //var token = req.query.token;
    // jwt.verify(token, SEED, (err, decoded) => {
    //     if (err) {
    //         return res.status(401).json({
    //             ok: false,
    //             message: 'Token no valido',
    //             errors: err
    //         });
    //     }

    //     req.usuario = decoded.usuario;

    //     console.log('usuario decodificado', decoded);

    //     next();

    // });

    req.idUser = 123456;

    next();
}