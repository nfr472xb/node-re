var express = require('express');
var router = express.Router();
var fireData = require("./service/fireData");
router.get('/', function (req, res, next) {
    var auth = req.session.uid;
    var userName = auth ? req.session.mail : '訪客';
    fireData.ref('post').once('value', function (snapshopt) {

var key = Object.keys(snapshopt.val())[0];
        res.render('index', {
            title: 'Analypix',
            name: userName,
            post: snapshopt.val(),
            auth: auth,
            errors: req.flash('errors')
        });
            
    })
});
/* GET home page. */
module.exports = router;