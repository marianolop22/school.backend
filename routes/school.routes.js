var express = require('express');
var app = express();
var SchoolController = require ( '../controllers/school.controller');

app.post('/add', SchoolController.addSchool );
app.post('/updateMainImage', SchoolController.updateMainImage );
app.post('/updateShieldImage', SchoolController.updateShieldImage );
app.get('/getSchool', SchoolController.getSchool );

module.exports = app;