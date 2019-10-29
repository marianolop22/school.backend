var express = require('express');
var app = express();
var People = require ( '../controllers/people.controller');
var mdAuthentication = require('../middlewares/authentication');

app.post('', mdAuthentication.checkToken , People.addPeople );
app.get('', mdAuthentication.checkToken, People.getPeople);
app.get('/getPeopleList', mdAuthentication.checkToken, People.getPeopleList);
app.put('', mdAuthentication.checkToken, People.updatePeople );

module.exports = app;