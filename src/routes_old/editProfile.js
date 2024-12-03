var express = require('express');
var router = express.Router();

/* GET edit profile page */
router.get('/', (req, res, next) => {
    res.render('editprofile', { title: 'Editar Perfil', currentPage: 'edit_profile' })
});

module.exports = router;