var express = require('express');
var router = express.Router();
const userService = require('./userService');

/* GET register page. */
router.get('/register', (req, res, next) => {
    res.render('register', { title: 'Registro', currentPage: 'register' })
});

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
  
    const userData = {
        username,
        email,
        password, 
    };

    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
});

module.exports = router;