const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.css = 'messages';
    next();
});

// Ruta principal (profile)
router.get('/', (req, res) => {
    res.render('messages', { title: 'Mensajería', currentPage: 'messages' });
});

module.exports = router;