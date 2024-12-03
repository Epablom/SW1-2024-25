const { MongoClient } = require('mongodb');
const initializeDatabase = require('./init');

class Database {
    static instance = null;

    constructor() {
        // console.log("Buscando instancia...");
        // console.log("This.db at the beggining is", this.db);
        if (Database.instance) {
            return Database.instance;
        }
        // console.log("Instancia no encontrada. Creando nueva instancia...");
        this.client = new MongoClient("mongodb://127.0.0.1:27017");
        // console.log("Cliente creado.");
        this.db = null;
        this.connect();
        // console.log("Conectando a la base de datos...");
        
        Database.instance = this;
        // console.log("This.db is", this.db);
    }

    async connect(databaseName = "StudyHub") {
        if (this.db) return this.db; // Devuelve la instancia si ya está conectada
        // console.log("Conectando a la base de datos...");
        try {
            const adminDb = this.client.db().admin();
            const databases = await adminDb.listDatabases();
            const dbExists = databases.databases.some(db => db.name === databaseName);
            // console.log("Databases:", databases);
            // console.log("Database exists:", dbExists);

            if (!dbExists) {
                console.log(`Base de datos "${databaseName}" no encontrada. Inicializando...`);
                await initializeDatabase(this.client, databaseName);
            }

            this.db = this.client.db(databaseName);
            console.log(`Conectado a la base de datos: ${databaseName}`);
            return this.db;
        } catch (error) {
            console.error("Error conectando a la base de datos:", error);
            throw error;
        }
    }

    getCollection(collectionName) {
        if (!this.db) throw new Error("No conectado a la base de datos. Llama a `connect` primero.");
        return this.db.collection(collectionName);
    }

    async close() {
        if (this.db) {
            await this.client.close();
            this.db = null;
            console.log("Conexión cerrada.");
        }
    }

    async getUserById(userId) {
        return await this.getCollection("Users").findOne({ id: userId });
    }

    async getPasswordByUsername(username) {
        const user = await this.getCollection("Users").findOne({ username });
        return user ? user.password : null;
    }

    async getChatById(chatId) {
        return await this.getCollection("Chats").findOne({ id: chatId });
    }

    async getMessagesByChatId(chatId) {
        return await this.getCollection("Messages").find({ chat_id: chatId }).toArray();
    }

    async insertUser(userData) {
        return await this.getCollection("Users").insertOne(userData);
    }

    async insertMessage(messageData) {
        return await this.getCollection("Messages").insertOne(messageData);
    }

    async insertChat(chatData) {
        return await this.getCollection("Chats").insertOne(chatData);
    }
}

module.exports = Database;
