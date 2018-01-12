var express = require('express');
var router = express.Router();
var fireData = require("./service/fireData");
var fireAuth = require("./service/fireAuth");
router.post('/', function (req, res) {
 
    var errors = req.validationErrors();
    if (errors) {
        req.flash('errors',errors[0].msg) ;
      
        return res.redirect('/');  
    } else {
            fireData.ref('post').push({
                authorr: req.session.uid, 
                location: req.body.Locationcontent
            }).then(function () {
                    res.redirect('/');
            })


            fireData.ref('me').push({
                authorr: req.session.uid, 
                location: req.body.Locationcontent
            }).then(function () {
                    res.redirect('/');
            })
    }

})
module.exports = router;