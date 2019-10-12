var express = require('express');
var app = express();
var ClassroomController = require ( '../controllers/classroom.controller');
var mdAuthentication = require('../middlewares/authentication');

app.post('', mdAuthentication.checkToken , ClassroomController.addClassroom );
app.get('', ClassroomController.getClassroom );
app.put('', mdAuthentication.checkToken, ClassroomController.updateClassroom );

module.exports = app;