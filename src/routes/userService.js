//fichero para programar métodos referentes a la creacion y obtencion de datos de la base de datos

const db = require("./Connection");

//metodos de ejemplo para ver si fufa la base de datos
async function createUser(userData) {
    const users = db.getCollection("users");
    const result = await users.insertOne(userData);
    console.log("Usuario creado con ID:", result.insertedId);
    return result.insertedId;
}

async function findUserByUsername(username) {
    const users = db.getCollection("users");
    const user = await users.findOne({ username });
    return user;
}

module.exports = { createUser, findUserByUsername };
