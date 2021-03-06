var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require('./auth'));
//app.use('/', require('./controllers/landing-static'));
app.use('/api/entries', require('./controllers/api/entries'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));
app.use('/', require('./controllers/static'));

app.listen(3000, function () {
    console.log('Server Listening on', 3000);
});
