var express = require('express');
var router = express.Router();
var firebase = require("firebase");
/* GET home page. */
router.get('/', function (req, res) {
    res.render('user', { currentUser: req.session.mail });
})
//middleware

module.exports = router; 