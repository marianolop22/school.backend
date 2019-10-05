var express = require('express');
var app = express();
var SchoolController = require ( '../controllers/school.controller');

app.post('/add', SchoolController.addSchool );
app.post('/updateImage', SchoolController.updateImage );
app.get('/getSchool', SchoolController.getSchool );
app.put('/updateSchool', SchoolController.updateSchool );

module.exports = app;