var express = require('express');
var app = express();
var SchoolController = require ( '../controllers/school.controller');

app.post('/add', SchoolController.addSchool );

module.exports = app;