var express = require('express');
var router = express.Router();

/* GET history */
router.get('/', (req, res, next) => {
    res.locals.isAdmin = true;
    res.render('history', { title: 'Historial de Notificaciones', css: 'admin', currentPage: 'history' })
});

module.exports = router;