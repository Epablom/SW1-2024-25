var express = require('express');
var router = express.Router();

/* GET profile. */
router.get('/', (req, res, next) => {
    res.render('profile', { title: 'Perfil', currentPage: 'profile' })
});

module.exports = router;