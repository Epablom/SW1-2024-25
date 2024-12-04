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
        const users = await dbInstance.getCollection('Users').find({}).toArray();
        const news = await dbInstance.getCollection('News').find({}).toArray();
        res.render('index', { title: 'Inicio', currentPage: 'index', users, news });
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.render('index', { title: 'Inicio', currentPage: 'index', users: [] });
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
