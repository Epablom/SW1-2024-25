const express = require('express');
const router = express.Router();
const userService = require('./userService');
const db = require('./Connection');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login', { user: req.session.user});
});

router.post('/', async function(req, res, next) {
    const { username, password } = req.body;

    await db.connect("ConnectionWeb1");
    //comprobamos si usuario existe
    const user = await userService.findUserByUsername(username);
    
    if (user && user.password === password) {
        req.session.message = "¡Login correcto!";
        req.session.user = { username };
        res.redirect('/profile');
    } else {
        req.session.error = "Usuario o contraseña incorrectas";
        res.redirect('/login');
    }
});

module.exports = router;
