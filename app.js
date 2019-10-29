'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar rutas
var school_routes = require('./routes/school.routes');
var groupTemplate_routes = require('./routes/groupTemplate.routes');
var groups_routes = require('./routes/groups.routes');
var people_routes = require('./routes/people.routes');
var app_routes = require('./routes/app.routes');


// Configurar cabeceras HTTP
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Expose-Headers', 'Authorization');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas base
app.use('/v1/school', school_routes);
app.use('/v1/groupTemplate', groupTemplate_routes);
app.use('/v1/groups', groups_routes);
app.use('/v1/people', people_routes);
app.use('/v1', app_routes);



module.exports = app;