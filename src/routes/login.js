const express = require('express');
const router = express.Router();
//const database = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { user: req.session.user});
});

router.post('/', async function(req, res, next) {
    const username = req.body.usernameLogin;
    const password = req.body.passwordLogin;

    //Comprobación si el usuario es correcto
    /*if(await database.users.isLoginRight(username, req.body.pass)){
        req.session.message = "¡Login correcto!";
        req.session.user = {username};
        res.redirect('profile');
    } else {
        req.session.error = "Usuario o contraseña incorrectas";
        res.redirect('login');
    }*/
});

module.exports = router;
