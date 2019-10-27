var express = require('express');
var app = express();
var Groups = require ( '../controllers/groups.controller');
var mdAuthentication = require('../middlewares/authentication');

app.post('', mdAuthentication.checkToken , Groups.addGroup );
app.get('', mdAuthentication.checkToken, Groups.getGroup);
app.get('/getGroupList', mdAuthentication.checkToken, Groups.getGroupList);
app.put('', mdAuthentication.checkToken, Groups.updateGroup );

module.exports = app;