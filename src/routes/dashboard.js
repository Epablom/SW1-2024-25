var express = require('express');
var router = express.Router();

//mmmmm vamos a ver si fufa de mmmm a mmmm ejemplo que se puede borrar 
const db = require("./Connection");
const { createUser, findUserByUsername } = require("./userService");

(async () => {
    try {
        // Conectar a la base de datos
        await db.connect("ConnectionWeb1");

        // Crear un usuario
        const userId = await createUser({
            "_id": 1,
            "username": "johndoe",
            "password": "password",
            "email": "john.doe@example.com",
            "degree": "Computer Science",
            "degreeyear": 2024,
            "university": "XYZ University",
            "faculty": "Engineering",
            "description": "Interested in AI and machine learning.",
            "imageurl": "path_to_image",
            "admin": false,
            "isBanned": false
          });
        console.log("Usuario creado:", userId);

        // Buscar un usuario por nombre
        const user = await findUserByUsername("johndoe");
        console.log("Usuario encontrado:", user);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        // Cerrar la conexión
        await db.close();
    }
})();

//mmmmm

/* GET dashboard page */
router.get('/', (req, res, next) => {
    res.locals.isAdmin = true;
    res.render('dashboard', { title: 'Panel de Administrador', css: 'admin', currentPage: 'dashboard' })
});

module.exports = router;


