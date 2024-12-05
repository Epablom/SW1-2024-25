const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.css = 'dashboard';
    next();
});

// Ruta principal (dashboard)
router.get('/', (req, res) => {
    res.render('dashboard', { title: 'Dashboard', currentPage: 'dashboard' });
});

// Ruta para alertas
router.get('/alertas', (req, res) => {
    res.render('alertas', { title: 'Alertas', currentPage: 'alertas' });
});

// Ruta para history
router.get('/history', (req, res) => {
    res.render('history', { title: 'Historial', currentPage: 'history' });
});

// Ruta para reportedUsers
router.get('/reportedUsers', (req, res) => {
    res.render('reportedUsers', { title: 'Usuarios Reportados', currentPage: 'reportedUsers' });
});

// Ruta para users
router.get('/users', (req, res) => {
    res.render('users', { title: 'Usuarios', currentPage: 'users' });
});

module.exports = router;
