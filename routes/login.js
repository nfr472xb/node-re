var express = require('express');
var router = express.Router();
var fireAuth = require("./service/fireAuth");
var flash = require('connect-flash');
/* GET home page. */
router.get('/', function (req, res) {
    var auth = req.session.uid;
    var userName = auth ? req.session.mail : '訪客';
    res.render('login', {
        title: '登入',
        message: req.flash('message'),
        name: userName,
        errors: req.flash('errors')
    });

})
router.post('/', function(req,res){
    fireAuth.signInWithEmailAndPassword(req.body.email, req.body.passwd)
                .then(function (user) {
                    req.session.uid = user.uid;
                    req.session.mail = req.body.email;
                    console.log(req.session.uid)
                    res.redirect('/');
                })
                .catch(function (error) {
                    console.log(error)
                    res.redirect('/');
                });
}
);
router.get('/login', function (req, res) {
    res.render('login', { title: '註冊成功' });
})
module.exports = router;