var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', (req, res, next) => {
    res.render('register', { title: 'Registro', currentPage: 'register' })
});

module.exports = router;