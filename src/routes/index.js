var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'StudyHub', css: 'mainItems', currentPage: 'index' });
});

module.exports = router;