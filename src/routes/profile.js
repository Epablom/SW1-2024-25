const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.css = 'profile';
    next();
});

// Ruta principal (profile)
router.get('/', (req, res) => {
    res.render('profile', { title: 'Perfil', currentPage: 'profile' });
});

// Ruta para editProfile
router.get('/editProfile', (req, res) => {
    res.render('editProfile', { title: 'Editar Perfil', currentPage: 'editProfile' });
});

// Ruta para resetPassword
router.get('/resetPassword', (req, res) => {
    res.render('resetPassword', { title: 'Reiniciar Contraseña', currentPage: 'resetPassword' });
});

module.exports = router;
