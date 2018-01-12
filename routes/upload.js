var express = require('express');
var router = express.Router();
var fireAuth = require("./service/fireAuth");
var flash = require('connect-flash');
var fireData = require("./service/fireData");
/* GET home page. */



router.get('/', function(req, res) {
  
  
  var auth = req.session.uid;
  
  var userName = auth ? req.session.mail : '訪客';
    res.render('upload', {
      title: '上傳',
      name: userName,
      errors: req.flash('errors')
  });



  })



  
module.exports = router;




/* GET home page. */
module.exports = router;

