var express = require('express');
var app = express();
var GroupTemplate = require ( '../controllers/groupTemplate.controller');
var mdAuthentication = require('../middlewares/authentication');

app.post('', mdAuthentication.checkToken , GroupTemplate.addGroupTemplate );
app.get('', GroupTemplate.getGroupTemplate );
app.put('', mdAuthentication.checkToken, GroupTemplate.updateGroupTemplate );

module.exports = app;