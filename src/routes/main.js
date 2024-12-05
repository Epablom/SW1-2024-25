const express = require('express');
const router = express.Router();
const Database = require('../db/connection');

const dbInstance = new Database();

router.use((req, res, next) => {
    res.locals.css = 'mainItems';
    next();
});

// Ruta principal (index)
router.get('/', async (req, res) => {
    try {
        const users = await dbInstance.getCollection('User').find({}).toArray();
        const news = await dbInstance.getCollection('News').find({}).toArray();
        const mainUser = req.session.mainUser || null;
        res.render('index', { title: 'Inicio', currentPage: 'index', users, news, mainUser });
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.render('index', { title: 'Inicio', currentPage: 'index', users: [], news: [], mainUser: null });
    }
});

// Ruta para publication
router.get('/publication', (req, res) => {
    res.render('publication', { title: 'Publicación', currentPage: 'publication' });
});

// Ruta para resources
router.get('/resources', (req, res) => {
    res.render('resources', { title: 'Recursos', currentPage: 'resources' });
});

module.exports = router;
