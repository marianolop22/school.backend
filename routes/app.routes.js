var express = require('express');
var app = express();

app.get('/hello', (req,res) => {

    return res.status(200).json({
        ok: true,
        message: 'en teoria nada'
    });

} );

module.exports = app;