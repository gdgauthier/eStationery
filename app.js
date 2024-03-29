require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var MongoStore = require('connect-mongo');
var methodOverride = require("method-override");
var hbs = require("handlebars");
var http = require('http');

var app = express()

var routes = require('./routes/index');
var userRoutes = require('./routes/user');

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.MONGO);
//mongoose.connect('mongodb://localhost/estationery', { useMongoClient: true, });
require('./config/passport');

// view engine setup
app.engine('.hbs', expressHbs.engine({
  defaultLayout: 'layout',
  extname: '.hbs',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
}));
app.set('view engine', '.hbs');

hbs.registerHelper('if_eq', function(a, b, opts) {
  if(a === b) {
    return opts.fn(this);
  } else {
      return opts.inverse(this); 
  }
});

hbs.registerHelper('if_gt', function(a, b, opts) {
  if(a > b) {
    return opts.fn(this);
  } else {
      return opts.inverse(this); 
  }
});

hbs.registerHelper('if_gt0', function(a, b, opts) {
  if(a >= b) {
    return opts.fn(this);
  } else {
      return opts.inverse(this); 
  }
});

hbs.registerHelper('if_lt', function(a, b, opts) {
  if(a < b) {
    return opts.fn(this);
  } else {
      return opts.inverse(this); 
  }
});

hbs.registerHelper('if_null', function(a, b, opts) {
  if(!null) {
    return opts.fn(this);
  } else {
      return opts.inverse(this); 
  }
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(logger('dev'));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'yoursecret', 
  resave: false, 
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO }),
  cookie: { maxAge: 60 * 60 * 1000 }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;   
    next();
});

app.use('/user', userRoutes);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;