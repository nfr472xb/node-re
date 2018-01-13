var express = require('express');
var router = express.Router();
var fireData = require("./service/fireData");
var fireAuth = require("./service/fireAuth");





router.post('/', function (req, res) {
 
    var errors = req.validationErrors();
    if (errors) {
        req.flash('errors',errors[0].msg) ;
        return res.redirect('/single/'+req.body.postid);  
    } else {
            fireData.ref('comment/'+req.body.postid).push({
                comment:req.body.content,
                user:req.body.name
            }).then(function () {
                    res.redirect('/single/'+req.body.postid);
            })


    }

})
module.exports = router;