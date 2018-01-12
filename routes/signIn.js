var express = require('express');
var router = express.Router();
var fireAuth = require("./service/fireAuth");
var fireData = require("./service/fireData");
var bcrypt = require('bcrypt-nodejs');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('signIn', { title: '註冊', name: '訪客', error: '' });
})
router.post('/', function (req, res) {
    let email = req.body.email;
    let password = req.body.passwd;
    fireAuth.createUserWithEmailAndPassword(email, password)
        .then(function (user) {
            let saveUser = {
                'email': email,
                'password': password,
                'user_type': "member",
                'created_at': new Date(),
                'updated_at': new Date(),
                'key': user.uid
            };
            let ref = fireData.ref('/users/' + user.uid);
            ref.set(saveUser);
            fireAuth.signInWithEmailAndPassword(email, password)
                .then(function (user) {
                    res.redirect('/login/loginSuccess');
                })
                .catch(function (error) {
                    res.redirect('/');
                });
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            return res.render('signIn', { title: '註冊', name: '訪客', error: errorMessage });
        });
})
module.exports = router; 