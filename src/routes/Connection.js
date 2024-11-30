//No se toca simplemente es la clase que maneja la conexion a la base de datos
const { MongoClient } = require("mongodb");

class Database {
    constructor() {
        if (!Database.instance) {
            this.client = new MongoClient("mongodb://0.0.0.0:27017");
            this.db = null; // Conexión a la base de datos
            Database.instance = this; // Instancia única
        }
        return Database.instance;
    }

    async connect(databaseName) {
        if (!this.db) {
            await this.client.connect();
            this.db = this.client.db(databaseName); // Selecciona la base de datos
            console.log(`Conectado a la base de datos: ${databaseName}`);
        }
        return this.db;
    }

    getCollection(collectionName) {
        if (!this.db) {
            throw new Error("No conectado a la base de datos. Llama a `connect` primero.");
        }
        return this.db.collection(collectionName); // Devuelve una colección
    }

    async close() {
        if (this.db) {
            await this.client.close();
            this.db = null;
            console.log("Conexión a MongoDB cerrada.");
        }
    }
}

// Exportar una única instancia del Singleton
const dbInstance = new Database();

module.exports = dbInstance;