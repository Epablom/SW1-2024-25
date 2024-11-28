var express = require('express');
var router = express.Router();
const userService = require('./userService');

/* GET register page. */
router.get('/', (req, res, next) => {
    res.render('register', { title: 'Registro', currentPage: 'register' })
});

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
  
    const userData = {
        username,
        email,
        password, 
    };

    const userId = await userService.createUser(userData);
});

module.exports = router;