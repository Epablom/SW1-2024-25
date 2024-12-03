var express = require('express');
var router = express.Router();

/* GET alertas. */
router.get('/', (req, res, next) => {
    res.locals.isAdmin = true;
    res.render('alertas', { title: 'Alertas', css: 'admin', currentPage: 'alertas' })
});

module.exports = router;