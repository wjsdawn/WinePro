var createError = require('http-errors');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var poetRouter = require('./routes/poet');
var paintingRouter = require('./routes/painting');
var poetlibaiRouter = require('./routes/poetlibai');
var DrinkingGameRouter = require('./routes/DrinkingGame');
var WineAndEconomyRouter = require('./routes/WineAndEconomy');
var WineBrandRouter = require('./routes/WineBrang');
var WinePicDataRouter = require('./routes/WinePicData');
var WineContainersInfoRouter = require('./routes/WineContainersInfo');
var BaiJiuWHRouter = require('./routes/BaiJiuWH')
var StaticalDataRouter = require('./routes/StatisticalData')
var Poem_AuthorRouter = require('./routes/Poem_Author')
var Poem_ThemeRouter = require('./routes/Poem_Theme')
var Dynasty_AuthorRouter = require('./routes/dynasty_author')

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
app.use('/', indexRouter);//app.use 第一个参数也可以传入请求地址，代表不论什么请求方式，只要是这个请求地址就接收这个请求
app.use('/', usersRouter);
app.use('/',loginRouter);
app.use('/',poetRouter);
app.use('/',paintingRouter);
app.use('/',poetlibaiRouter);
app.use('/',DrinkingGameRouter);
app.use('/',WineAndEconomyRouter);
app.use('/',WineBrandRouter);
app.use('/',WinePicDataRouter);
app.use('/',WineContainersInfoRouter);
app.use('/',BaiJiuWHRouter);
app.use('/',StaticalDataRouter);
app.use('/',Poem_AuthorRouter);
app.use('/',Poem_ThemeRouter)
app.use('/',Dynasty_AuthorRouter)
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
