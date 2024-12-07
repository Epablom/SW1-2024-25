const express = require('express');
const router = express.Router();
const Database = require('../db/connection');
const db = new Database();
const { ObjectId } = require('mongodb');  

router.use((req, res, next) => {
    res.locals.css = 'profile';
    next();
});

// Ruta principal (profile)
router.get('/', (req, res) => {
    res.render('profile', { title: 'Perfil', currentPage: 'profile',   mainUser: req.session.mainUser });
});

// Ruta para editProfile
router.get('/editProfile', (req, res) => {
    res.render('editProfile', { title: 'Editar Perfil', currentPage: 'editProfile' });
});

// Ruta para resetPassword
router.get('/resetPassword', (req, res) => {
    res.render('resetPassword', { title: 'Reiniciar Contraseña', currentPage: 'resetPassword' });
});

//se cambia de uno en uno, deberia cambiarse todo, además, si mete uno el resto no se quedan como estaban
//TODO arreglarlo
router.post('/edit', async (req, res) => {
    const { username, email, degree, description } = req.body;

    const userId = req.session.user._id;

    try {
        const userCollection = db.getCollection("User");
        const existingUser = await userCollection.findOne({ _id: new ObjectId(userId) });

        const updates = {
            username: username || existingUser.username,
            email: email || existingUser.email,
            degree: degree || existingUser.degree,
            description: description || existingUser.description
        };
        
        await updateUser(userId, updates);
        Object.assign(req.session.user, updates);
        res.redirect('/profile');
    } catch (error) {
        console.error('Error actualizando el perfil:', error);
        res.status(500).send('Error al actualizar el perfil');
    }
});
/*Esto sería si nos podemos logear con un userId integer como están añadidos por defecto en la base de datos
async function updateUser(userId, updates) {
    try {
        const userCollection = db.getCollection("User");
        const userIdInt = parseInt(userId, 10); //quitar si no es necesario parsear a integer

        const result = await userCollection.updateOne(
            { _id: userIdInt }, 
            { $set: updates }  
        );

        if (result.modifiedCount === 0) {
            throw new Error('No se actualizó ningún documento');
        }

        console.log(`Usuario ${userId} actualizado con éxito`);
    } catch (error) {
        console.error('Error actualizando el usuario:', error);
        throw error;
    }
}*/

async function updateUser(userId, updates) {
    try {
        const userCollection = db.getCollection("User");

        const objectId = new ObjectId(userId);  

        const result = await userCollection.updateOne(
            { _id: objectId },  
            { $set: updates }    
        );

        if (result.modifiedCount === 0) {
            throw new Error('No se actualizó ningún documento');
        }

        console.log(`Usuario ${userId} actualizado con éxito`);
    } catch (error) {
        console.error('Error actualizando el usuario:', error);
        throw error;
    }
}

module.exports = router;
