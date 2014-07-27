var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require("passport");
var flash = require("connect-flash");
var session = require("express-session");


//connect to db


require("./config/passport.js")(passport);    //run config on passport


var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));


//setting up session system
app.use(session({secret: "outsidehacks"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


//routing
require('./routes/index.js')(app,passport);



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


module.exports = app;
