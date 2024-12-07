const { MongoClient } = require('mongodb');
const initializeDatabase = require('./init');

class Database {
    static instance = null;

    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        this.client = new MongoClient("mongodb://127.0.0.1:27017");
        this.db = null;
        this.connect();
        
        Database.instance = this;
    }

    async connect(databaseName = "StudyHub") {
        if (this.db) return this.db;
        try {
            const adminDb = this.client.db().admin();
            const databases = await adminDb.listDatabases();
            const dbExists = databases.databases.some(db => db.name === databaseName);

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

    async getAllUsers() {
        return await this.getCollection("User").find().toArray(); // Fetches all users
      }         

    async getUserById(userId) {
        return await this.getCollection("User").findOne({ "id": userId });
    }

    async getUserByEmail(email) {
        return await this.getCollection("User").findOne({ "email": email });
    }

    async getPasswordByUsername(username) {
        const user = await this.getCollection("User").findOne({ username });
        return user ? user.password : null;
    }

    async getChatById(chatId) {
        return await this.getCollection("Chat").findOne({ id: chatId });
    }

    async getMessagesByChatId(id) {
        return await this.getCollection('Message').find({
            chatId: id
        }).toArray();
    }

    async insertUser(userData) {
        return await this.getCollection("User").insertOne(userData);
    }

    async insertMessage(messageData) {
        return await this.getCollection("Message").insertOne(messageData);
    }

    async insertChat(chatData) {
        return await this.getCollection("Chat").insertOne(chatData);
    }
}

module.exports = Database;
