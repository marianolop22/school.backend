var express = require('express');
var app = express();
var GroupTemplate = require ( '../controllers/groupTemplate.controller');
var mdAuthentication = require('../middlewares/authentication');

app.post('', mdAuthentication.checkToken , GroupTemplate.addGroupTemplate );
app.get('', mdAuthentication.checkToken, GroupTemplate.getGroupTemplate );
app.get('/getGroupTemplateList', mdAuthentication.checkToken, GroupTemplate.getGroupTemplateList );
app.put('', mdAuthentication.checkToken, GroupTemplate.updateGroupTemplate );

module.exports = app;