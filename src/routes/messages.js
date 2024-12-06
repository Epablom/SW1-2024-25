const express = require('express');
const router = express.Router();
const Database = require('../db/connection'); // Asegúrate de requerir la conexión a la base de datos

const dbInstance = new Database();

router.use((req, res, next) => {
    res.locals.css = 'messages';
    next();
});

// Ruta principal (messages)
router.get('/', async (req, res) => {
    try {
        // Obtener los contactos de la base de datos (excluyendo al usuario principal)
        const contacts = await dbInstance.getCollection('User').find({
            _id: { $ne: req.session.mainUser ? req.session.mainUser._id : null }
        }).toArray();

        // Obtener el usuario principal de la sesión
        const mainUser = req.session.mainUser || null;

        // Renderizar la vista y pasar los contactos y mainUser
        res.render('messages', { title: 'Mensajería', currentPage: 'messages', mainUser, contacts });
    } catch (error) {
        console.error("Error al obtener contactos:", error);
        // En caso de error, renderizar la vista sin contactos
        res.render('messages', { title: 'Mensajería', currentPage: 'messages', mainUser: req.session.mainUser || null, contacts: [] });
    }
});

module.exports = router;
