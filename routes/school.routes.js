var express = require('express');
var app = express();
var SchoolController = require ( '../controllers/school.controller');
var mdAuthentication = require('../middlewares/authentication');

app.post('', mdAuthentication.checkToken, SchoolController.addSchool );
app.get('', SchoolController.getSchool );
app.put('', mdAuthentication.checkToken, SchoolController.updateSchool );
app.post('/updateImage', mdAuthentication.checkToken, SchoolController.updateImage );

module.exports = app;