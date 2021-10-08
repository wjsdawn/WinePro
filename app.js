var createError = require('http-errors');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var poetRouter = require('./routes/poet')
var  paintingRouter = require('./routes/painting')

var express = require('express');//这两行通过 require() 导入 Express 模块，并创建了一个 Express 应用
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
	origin:['http://localhost:8080'],
	methods:['GET','POST'],
	alloweHeaders:['Conten-Type','Authorization']
}));
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/',loginRouter);
app.use('/',poetRouter);
app.use('/',paintingRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
