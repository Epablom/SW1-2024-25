const { ObjectId } = require('mongodb');
async function seedDatabase(db) {
    const users = [
        { _id: new ObjectId("64b3f8b234d9f8a942d9f101"), username: "Carlos", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "carlos@example.com", degree: "GISI", degreeyear: 3, university: "CEU San Pablo", faculty: "EPS", description: "Soy Carlos.", imagelink: "../images/users/1.jpg", admin: true, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f102"), username: "Federico", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "federico@example.com", degree: "GISI", degreeyear: 2, university: "CEU San Pablo", faculty: "EPS", description: "Soy Federico.", imagelink: "../images/users/2.jpg", admin: true, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f103"), username: "Ana", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "ana@example.com", degree: "GISI", degreeyear: 1, university: "CEU San Pablo", faculty: "EPS", description: "Soy Ana.", imagelink: "../images/users/3.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f104"), username: "María", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "maría@example.com", degree: "GISI", degreeyear: 4, university: "CEU San Pablo", faculty: "EPS", description: "Soy María.", imagelink: "../images/users/4.jpg", admin: true, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f105"), username: "Marta", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "marta@example.com", degree: "GISI", degreeyear: 3, university: "CEU San Pablo", faculty: "EPS", description: "Soy Marta.", imagelink: "../images/users/5.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f106"), username: "Laura", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "laura@example.com", degree: "GISI", degreeyear: 2, university: "CEU San Pablo", faculty: "EPS", description: "Soy Laura.", imagelink: "../images/users/6.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f107"), username: "Pedro", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "pedro@example.com", degree: "GISI", degreeyear: 1, university: "CEU San Pablo", faculty: "EPS", description: "Soy Pedro.", imagelink: "../images/users/7.jpg", admin: false, isBanned: true },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f108"), username: "Luis", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "luis@example.com", degree: "GISI", degreeyear: 4, university: "CEU San Pablo", faculty: "EPS", description: "Soy Luis.", imagelink: "../images/users/8.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f109"), username: "Pablo", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "pablo@example.com", degree: "GISI", degreeyear: 3, university: "CEU San Pablo", faculty: "EPS", description: "Soy Pablo.", imagelink: "../images/users/1.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f110"), username: "Miguel", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "miguel@example.com", degree: "GISI", degreeyear: 2, university: "CEU San Pablo", faculty: "EPS", description: "Soy Miguel.", imagelink: "../images/users/2.jpg", admin: true, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f111"), username: "Isabel", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "isabel@example.com", degree: "GISI", degreeyear: 1, university: "CEU San Pablo", faculty: "EPS", description: "Soy Isabel.", imagelink: "../images/users/3.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f112"), username: "Clara", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "clara@example.com", degree: "GISI", degreeyear: 4, university: "CEU San Pablo", faculty: "EPS", description: "Soy Clara.", imagelink: "../images/users/4.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f113"), username: "Daniela", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "daniela@example.com", degree: "GISI", degreeyear: 3, university: "CEU San Pablo", faculty: "EPS", description: "Soy Daniela.", imagelink: "../images/users/5.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f114"), username: "Sofía", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "sofía@example.com", degree: "GISI", degreeyear: 2, university: "CEU San Pablo", faculty: "EPS", description: "Soy Sofía.", imagelink: "../images/users/6.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f115"), username: "Christian", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "christian@example.com", degree: "GISI", degreeyear: 1, university: "CEU San Pablo", faculty: "EPS", description: "Soy Christian.", imagelink: "../images/users/7.jpg", admin: false, isBanned: false },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f116"), username: "Javier", password: "$2b$10$SIoFfwNoVIeZgoHA8PomCO3S.g9UFENQH5tbQZVk/ZLBuuqgSa8gq", email: "javier@example.com", degree: "GISI", degreeyear: 4, university: "CEU San Pablo", faculty: "EPS", description: "Soy Javier.", imagelink: "../images/users/8.jpg", admin: false, isBanned: false }
    ];
    

    const chats = [
        { _id: new ObjectId("64b3f8b234d9f8a942d9f001"), userId: new ObjectId("64b3f8b234d9f8a942d9f101"), receiverId: new ObjectId("64b3f8b234d9f8a942d9f102") },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f002"), userId: new ObjectId("64b3f8b234d9f8a942d9f103"), receiverId: new ObjectId("64b3f8b234d9f8a942d9f104") },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f003"), userId: new ObjectId("64b3f8b234d9f8a942d9f106"), receiverId: new ObjectId("64b3f8b234d9f8a942d9f107") },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f004"), userId: new ObjectId("64b3f8b234d9f8a942d9f108"), receiverId: new ObjectId("64b3f8b234d9f8a942d9f109"), name: "Los pibes" },
        { _id: new ObjectId("64b3f8b234d9f8a942d9f005"), userId: new ObjectId("64b3f8b234d9f8a942d9f111"), receiverId: new ObjectId("64b3f8b234d9f8a942d9f112"), name: "Solo chicas" },
    ];    
    
    const messages = [
        { chatId: new ObjectId("64b3f8b234d9f8a942d9f001"), userId: new ObjectId("64b3f8b234d9f8a942d9f101"), content: "Hola Federico", time: new Date() },
        { chatId: new ObjectId("64b3f8b234d9f8a942d9f001"), userId: new ObjectId("64b3f8b234d9f8a942d9f102"), content: "Hola Carlos", time: new Date() },
        { chatId: new ObjectId("64b3f8b234d9f8a942d9f001"), userId: new ObjectId("64b3f8b234d9f8a942d9f101"), content: "¿Cómo estás?", time: new Date() },
        { chatId: new ObjectId("64b3f8b234d9f8a942d9f002"), userId: new ObjectId("64b3f8b234d9f8a942d9f103"), content: "Hola chicas", time: new Date() },
        { chatId: new ObjectId("64b3f8b234d9f8a942d9f002"), userId: new ObjectId("64b3f8b234d9f8a942d9f104"), content: "Hola Ana", time: new Date() },
        { chatId: new ObjectId("64b3f8b234d9f8a942d9f002"), userId: new ObjectId("64b3f8b234d9f8a942d9f103"), content: "Hola a todas", time: new Date() },
        { chatId: new ObjectId("64b3f8b234d9f8a942d9f003"), userId: new ObjectId("64b3f8b234d9f8a942d9f105"), content: "Hola Pedro", time: new Date() },
        { chatId: new ObjectId("64b3f8b234d9f8a942d9f003"), userId: new ObjectId("64b3f8b234d9f8a942d9f106"), content: "Hola Laura", time: new Date() },
        { chatId: new ObjectId("64b3f8b234d9f8a942d9f003"), userId: new ObjectId("64b3f8b234d9f8a942d9f105"), content: "¿Qué tal?", time: new Date() },
    ];

    const news = [
        { _id: 1, userId: 1, title: "Nueva tecnología en GISI", docroute: "../images/news/noticias1.jpg", time: new Date(), likes: [2, 3, 4] },
        { _id: 2, userId: 2, title: "Importancia de la programación en la universidad", docroute: "../images/news/noticias2.jpg", time: new Date(), likes: [1, 5, 6] },
        { _id: 3, userId: 3, title: "Pequeñas sorpresas, grandes recuerdos", docroute: "../images/news/anuncio1.jpg", time: new Date(), likes: [1, 2, 6, 7] },
        { _id: 4, userId: 4, title: "Tendencias en ingeniería informática", docroute: "../images/news/noticias3.jpg", time: new Date(), likes: [8, 9] },
        { _id: 5, userId: 5, title: "Aplicaciones innovadoras en electrónica", docroute: "../images/news/noticias4.jpg", time: new Date(), likes: [1, 4, 10] },
        { _id: 6, userId: 6, title: "A tu manera", docroute: "../images/news/anuncio2.jpg", time: new Date(), likes: [3, 4, 5] },
        { _id: 7, userId: 7, title: "Inteligencia artificial aplicada a redes", docroute: "../images/news/noticias5.jpg", time: new Date(), likes: [2, 3, 9] },
        { _id: 8, userId: 8, title: "Proyectos destacados de estudiantes", docroute: "../images/news/noticias6.jpg", time: new Date(), likes: [1, 6, 7, 8] },
        { _id: 9, userId: 9, title: "Cómo optimizar el aprendizaje en tecnología", docroute: "../images/news/noticias7.jpg", time: new Date(), likes: [2, 4] },
        { _id: 10, userId: 10, title: "Es lo que quiero", docroute: "../images/news/anuncio3.jpg", time: new Date(), likes: [1, 3, 6, 7] },
        { _id: 11, userId: 11, title: "Estudios en GISI: Experiencias", docroute: "../images/news/noticias8.jpg", time: new Date(), likes: [5, 6, 9] },
        { _id: 12, userId: 12, title: "Aplicaciones prácticas de blockchain", docroute: "../images/news/noticias9.jpg", time: new Date(), likes: [1, 2] },
        { _id: 13, userId: 13, title: "Nada sabe como mmMmMcDonald's", docroute: "../images/news/anuncio4.jpg", time: new Date(), likes: [2, 3, 10] },
        { _id: 14, userId: 14, title: "Electrónica aplicada a la robótica", docroute: "../images/news/noticias10.jpg", time: new Date(), likes: [3, 4, 8] },
        { _id: 15, userId: 15, title: "Destapa la felicidad", docroute: "../images/news/anuncio5.jpg", time: new Date(), likes: [1, 2, 9] },
        { _id: 16, userId: 16, title: "Casos prácticos en la industria", docroute: "../images/news/noticias11.jpg", time: new Date(), likes: [4, 5, 10] },
        { _id: 17, userId: 1, title: "Retos actuales en ingeniería informática", docroute: "../images/news/noticias12.jpg", time: new Date(), likes: [2, 6, 8] },
        { _id: 18, userId: 2, title: "El mejor dron de la historia", docroute: "../images/news/anuncio6.jpg", time: new Date(), likes: [3, 4, 7] },
        { _id: 19, userId: 3, title: "Cómo estructurar un proyecto exitoso", docroute: "../images/news/noticias13.jpg", time: new Date(), likes: [1, 9, 10] },
        { _id: 20, userId: 4, title: "La importancia de la ciberseguridad", docroute: "../images/news/noticias14.jpg", time: new Date(), likes: [2, 5, 6] }
    ];
    
    await db.collection("User").insertMany(users);
    await db.collection("Chat").insertMany(chats);
    await db.collection("Message").insertMany(messages);
    await db.collection("News").insertMany(news);

    console.log("Datos iniciales insertados.");
}

module.exports = seedDatabase;
