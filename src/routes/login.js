var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const userService = require('./userService');
const db = require('./Connection');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login', { user: req.session.user});
});

router.post('/', async function(req, res, next) {
    const { name, password } = req.body;
    try{
        await db.connect("ConnectionWeb1");
        const user = await userService.findUserByUsername(name);
        //comprobamos si usuario existe
        if (user) {
            const hashedPassword = user.hashedPassword;
            const isMatch = await bcrypt.compare(password, hashedPassword);
            //si la contraseña concuerda
            if (isMatch) {
                console.log("Login correcto");
                req.session.message = "¡Login correcto!";
                req.session.user = { username: user.name };
                return res.redirect('/profile'); 
            }
        }
        console.log("Usuario o contraseña incorrectos");
        req.session.error = "Usuario o contraseña incorrectas";
        res.redirect('/');
    } catch (error) {
        console.error("Error:", error);
    } finally {
        // Cerrar la conexión
        await db.close();
    }    
});

module.exports = router;
