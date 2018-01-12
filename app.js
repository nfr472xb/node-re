var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var flash = require('connect-flash');
var validator = require('express-validator');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// session
var session = require("express-session")
app.use(express.static("public"));
app.use(session({ secret: 'mysupersecret', resave: false, saveUninitialized: false }));
//passport
app.use(flash());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
var routes = require('./routes/index');
var login = require('./routes/login');
var doup = require('./routes/doup');
var signIn = require('./routes/signIn');
var upload = require('./routes/upload');


var user = require('./routes/user');
app.use('/', routes);
app.use('/login', login);
app.use('/signIn', signIn);
app.use('/upload', upload);
// check login
app.use(function (req, res, next) {
  if (req.session.uid) {
    return next();
  }
  res.redirect('/');
});
app.use('/user', user);
app.use('/doup', doup);


app.get('/out', function(req, res){
  req.session.destroy();
  res.redirect('/');
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
