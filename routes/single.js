var express = require('express');
var router = express.Router();
var fireAuth = require("./service/fireAuth");
var flash = require('connect-flash');
var fireData = require("./service/fireData");
/* GET home page. */



 

router.get('/:postid', function(req, res) {
  
  var auth = req.session.uid; 
  var userName = auth ? req.session.mail : '訪客';
  var videoName = req.params.name+req.params.id;



  fireData.ref('comment/'+req.param("postid")).once('value', function (snapshopt) {
    res.render('single', {
      title: '單篇文章',
      name: userName,
      errors: req.flash('errors'),
      single: snapshopt.val(),
      postid:req.param("postid"),
      auth:auth
  });
})


  })

/* GET home page. */
module.exports = router;

