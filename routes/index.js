// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const news = require('./news')

function route(app){
  app.use('/news', news)
}

module.exports = route;
