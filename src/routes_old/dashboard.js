var express = require('express');
var router = express.Router();

/* GET dashboard page */
router.get('/', (req, res, next) => {
    res.locals.isAdmin = true;
    res.render('dashboard', { title: 'Panel de Administrador', css: 'admin', currentPage: 'dashboard' })
});

module.exports = router;


