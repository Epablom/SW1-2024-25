const express = require('express');
const bcrypt = require('bcrypt');
const Database = require('../db/connection');
const router = express.Router();

const dbInstance = new Database();


// Registro de usuario
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            username,
            password: hashedPassword,
            email,
            degree: "GISI",
            degreeyear: 1,
            university: "CEU San Pablo",
            faculty: "EPS",
            description: "Nuevo usuario",
            imagelink: "../images/users/default.jpg",
            admin: false,
            isBanned: false
        };

        await dbInstance.insertUser(newUser);
        req.session.message = "Usuario registrado con éxito. Por favor, inicia sesión.";
        res.redirect('/');
    } catch (error) {
        console.error("Error en el registro:", error);
        req.session.error = "Hubo un problema con el registro. Inténtalo de nuevo.";
        res.redirect('/');
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await dbInstance.getPasswordByUsername(username);

        if (!user) {
            req.session.error = "Usuario no encontrado.";
            return res.redirect('/');
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            req.session.error = "Contraseña incorrecta.";
            return res.redirect('/');
        }

        req.session.user = {
            id: user._id,
            username: user.username,
            admin: user.admin
        };
        req.session.message = `Bienvenido, ${user.username}!`;
        res.redirect('/');
    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        req.session.error = "Hubo un problema al iniciar sesión. Inténtalo de nuevo.";
        res.redirect('/');
    }
});

// Cierre de sesión
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
