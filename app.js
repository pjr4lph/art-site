//creates express app
const express = require('express');
const app = express();

//access file system
const fs = require('fs');
const path = require('path');

// const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index.js');
const PORT = process.env.PORT || 3000;
//middleware for request handling chain
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//route handlers
app.use('/', indexRouter);

//server
app.set('port', PORT);
let server = app.listen(app.get('port'), () => {
    console.log( `server running at localhost:${PORT}` );
});

// what does this do? it looks like it always causes an error?
//catch 404 HTTP error
// app.use( function (request, response, next) {
//     let err = new Error('Not Found')
//     err.status = 404
//     next(err)
// })

//error handler
app.use(function (err, request, response , next) {
    response.locals.message = err.message
    response.locals.error = request.app.get('env') === 'development' ? err : {};

    //show error page
    response.status(err.status || 500)
    response.render('error')
})


module.exports = app;
