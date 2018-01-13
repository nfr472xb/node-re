var express = require('express');
var router = express.Router();
var fireData = require("./service/fireData");
var fireAuth = require("./service/fireAuth");



router.post('/', function (req, res) {
 
    var errors = req.validationErrors();
    /* time  */
    var d = new Date();
    var y = d.getYear();
    var q = d.getMonth();
    var a = d.getDate();
    var n = d.getHours();
    var m = d.getMinutes();
  　var s = d.getSeconds();　
    var add = '1900';
    y = parseInt(y)+parseInt(add);
  
    if (errors) {
        req.flash('errors',errors[0].msg) ;
      
        return res.redirect('/');  
    } else {
            fireData.ref('post').push({
                postid:req.session.uid+y+q+a+n+m+s,
                author: req.session.uid, 
                location: req.body.Locationcontent,
                photo: 'phourl'

            }).then(function () {
                    res.redirect('/');
            })


    }

})
module.exports = router;