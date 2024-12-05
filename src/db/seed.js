async function seedDatabase(db) {
    const users = [
        { _id: 1, username: "Carlos", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Carlos@example.com", degree: "GISI", degreeyear: 3, university: "CEU San Pablo", faculty: "EPS", description: "Soy Carlos.", imagelink: "../images/users/1.jpg", admin: true, isBanned: false },
        { _id: 2, username: "Federico", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Federico@example.com", degree: "GISI", degreeyear: 2, university: "CEU San Pablo", faculty: "EPS", description: "Soy Federico.", imagelink: "../images/users/2.jpg", admin: true, isBanned: false },
        { _id: 3, username: "Ana", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Ana@example.com", degree: "GISI", degreeyear: 1, university: "CEU San Pablo", faculty: "EPS", description: "Soy Ana.", imagelink: "../images/users/3.jpg", admin: false, isBanned: false },
        { _id: 4, username: "María", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "María@example.com", degree: "GISI", degreeyear: 4, university: "CEU San Pablo", faculty: "EPS", description: "Soy María.", imagelink: "../images/users/4.jpg", admin: true, isBanned: false },
        { _id: 5, username: "Marta", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Marta@example.com", degree: "GISI", degreeyear: 3, university: "CEU San Pablo", faculty: "EPS", description: "Soy Marta.", imagelink: "../images/users/5.jpg", admin: false, isBanned: false },
        { _id: 6, username: "Laura", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Laura@example.com", degree: "GISI", degreeyear: 2, university: "CEU San Pablo", faculty: "EPS", description: "Soy Laura.", imagelink: "../images/users/6.jpg", admin: false, isBanned: false },
        { _id: 7, username: "Pedro", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Pedro@example.com", degree: "GISI", degreeyear: 1, university: "CEU San Pablo", faculty: "EPS", description: "Soy Pedro.", imagelink: "../images/users/7.jpg", admin: false, isBanned: true },
        { _id: 8, username: "Luis", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Luis@example.com", degree: "GISI", degreeyear: 4, university: "CEU San Pablo", faculty: "EPS", description: "Soy Luis.", imagelink: "../images/users/8.jpg", admin: false, isBanned: false },
        { _id: 9, username: "Pablo", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Pablo@example.com", degree: "GISI", degreeyear: 3, university: "CEU San Pablo", faculty: "EPS", description: "Soy Pablo.", imagelink: "../images/users/1.jpg", admin: false, isBanned: false },
        { _id: 10, username: "Miguel", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Miguel@example.com", degree: "GISI", degreeyear: 2, university: "CEU San Pablo", faculty: "EPS", description: "Soy Miguel.", imagelink: "../images/users/2.jpg", admin: true, isBanned: false },
        { _id: 11, username: "Isabel", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Isabel@example.com", degree: "GISI", degreeyear: 1, university: "CEU San Pablo", faculty: "EPS", description: "Soy Isabel.", imagelink: "../images/users/3.jpg", admin: false, isBanned: false },
        { _id: 12, username: "Clara", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Clara@example.com", degree: "GISI", degreeyear: 4, university: "CEU San Pablo", faculty: "EPS", description: "Soy Clara.", imagelink: "../images/users/4.jpg", admin: false, isBanned: false },
        { _id: 13, username: "Daniela", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Daniela@example.com", degree: "GISI", degreeyear: 3, university: "CEU San Pablo", faculty: "EPS", description: "Soy Daniela.", imagelink: "../images/users/5.jpg", admin: false, isBanned: false },
        { _id: 14, username: "Sofía", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Sofía@example.com", degree: "GISI", degreeyear: 2, university: "CEU San Pablo", faculty: "EPS", description: "Soy Sofía.", imagelink: "../images/users/6.jpg", admin: false, isBanned: false },
        { _id: 15, username: "Christian", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Christian@example.com", degree: "GISI", degreeyear: 1, university: "CEU San Pablo", faculty: "EPS", description: "Soy Christian.", imagelink: "../images/users/7.jpg", admin: false, isBanned: false },
        { _id: 16, username: "Javier", password: "$2y$10$6wUkSskZvjzF2AtmIdkzz.lYzkZcG/MlMDc3WPQkOE04MCyv.wjKa", email: "Javier@example.com", degree: "GISI", degreeyear: 4, university: "CEU San Pablo", faculty: "EPS", description: "Soy Javier.", imagelink: "../images/users/8.jpg", admin: false, isBanned: false }
    ];
    

    const chats = [
        { _id: 1, users_ids: [1, 2] },
        { _id: 2, users_ids: [3, 4, 5], name: "SuperChat" },
        { _id: 3, users_ids: [6, 7] },
        { _id: 4, users_ids: [8, 9, 10], name: "Los pibes" },
        { _id: 5, users_ids: [11, 12, 13], name: "Solo chicas" },
        { _id: 6, users_ids: [14, 15] },
        { _id: 7, users_ids: [16, 1] },
        { _id: 8, users_ids: [2, 3, 4], name: "ISO" },
        { _id: 9, users_ids: [5, 6, 7], name: "SW1" },
        { _id: 10, users_ids: [8, 9, 10], name: "Ciber" }
    ];
    
    const messages = [
        { chat_id: 1, user_id: 1, content: "Hola Federico", time: new Date() },
        { chat_id: 1, user_id: 2, content: "Hola Carlos", time: new Date() },
        { chat_id: 1, user_id: 1, content: "¿Cómo estás?", time: new Date() },
        { chat_id: 2, user_id: 3, content: "Hola chicas", time: new Date() },
        { chat_id: 2, user_id: 4, content: "Hola Ana", time: new Date() },
        { chat_id: 2, user_id: 5, content: "Hola a todas", time: new Date() },
        { chat_id: 3, user_id: 6, content: "Hola Pedro", time: new Date() },
        { chat_id: 3, user_id: 7, content: "Hola Laura", time: new Date() },
        { chat_id: 3, user_id: 6, content: "¿Qué tal?", time: new Date() },
        { chat_id: 4, user_id: 8, content: "Hola chicos", time: new Date() },
        { chat_id: 4, user_id: 9, content: "Hola Luis", time: new Date() },
        { chat_id: 4, user_id: 10, content: "¿Cómo va todo?", time: new Date() },
        { chat_id: 5, user_id: 11, content: "Hola chicas", time: new Date() },
        { chat_id: 5, user_id: 12, content: "Hola Clara", time: new Date() },
        { chat_id: 5, user_id: 13, content: "Hola a todas", time: new Date() },
        { chat_id: 6, user_id: 14, content: "Hola chicas", time: new Date() },
        { chat_id: 6, user_id: 15, content: "Hola Daniela", time: new Date() },
        { chat_id: 6, user_id: 14, content: "Hola a todas", time: new Date() },
        { chat_id: 7, user_id: 16, content: "Hola Javier", time: new Date() },
        { chat_id: 7, user_id: 1, content: "Hola Carlos", time: new Date() },
        { chat_id: 7, user_id: 16, content: "¿Qué tal?", time: new Date() },
        { chat_id: 8, user_id: 2, content: "Hola Federico", time: new Date() },
        { chat_id: 8, user_id: 3, content: "Hola Ana", time: new Date() },
        { chat_id: 8, user_id: 4, content: "Hola a todos", time: new Date() },
        { chat_id: 9, user_id: 5, content: "Hola Marta", time: new Date() },
        { chat_id: 9, user_id: 6, content: "Hola Laura", time: new Date() },
        { chat_id: 9, user_id: 7, content: "Hola a todos", time: new Date() },
        { chat_id: 10, user_id: 8, content: "Hola chicos", time: new Date() },
        { chat_id: 10, user_id: 9, content: "Hola Pablo", time: new Date() },
        { chat_id: 10, user_id: 10, content: "Hola a todos", time: new Date() }
        
    ];

    const news = [
        { _id: 1, user_id: 1, title: "Nueva tecnología en GISI", docroute: "../images/news/noticias1.png", time: new Date(), likes: [2, 3, 4] },
        { _id: 2, user_id: 2, title: "Importancia de la programación en la universidad", docroute: "../images/news/noticias2.png", time: new Date(), likes: [1, 5, 6] },
        { _id: 3, user_id: 3, title: "Pequeñas sorpresas, grandes recuerdos", docroute: "../images/news/anuncio1.png", time: new Date(), likes: [1, 2, 6, 7] },
        { _id: 4, user_id: 4, title: "Tendencias en ingeniería informática", docroute: "../images/news/noticias3.png", time: new Date(), likes: [8, 9] },
        { _id: 5, user_id: 5, title: "Aplicaciones innovadoras en electrónica", docroute: "../images/news/noticias4.png", time: new Date(), likes: [1, 4, 10] },
        { _id: 6, user_id: 6, title: "A tu manera", docroute: "../images/news/anuncio2.png", time: new Date(), likes: [3, 4, 5] },
        { _id: 7, user_id: 7, title: "Inteligencia artificial aplicada a redes", docroute: "../images/news/noticias5.png", time: new Date(), likes: [2, 3, 9] },
        { _id: 8, user_id: 8, title: "Proyectos destacados de estudiantes", docroute: "../images/news/noticias6.png", time: new Date(), likes: [1, 6, 7, 8] },
        { _id: 9, user_id: 9, title: "Cómo optimizar el aprendizaje en tecnología", docroute: "../images/news/noticias7.png", time: new Date(), likes: [2, 4] },
        { _id: 10, user_id: 10, title: "Es lo que quiero", docroute: "../images/news/anuncio3.png", time: new Date(), likes: [1, 3, 6, 7] },
        { _id: 11, user_id: 11, title: "Estudios en GISI: Experiencias", docroute: "../images/news/noticias8.png", time: new Date(), likes: [5, 6, 9] },
        { _id: 12, user_id: 12, title: "Aplicaciones prácticas de blockchain", docroute: "../images/news/noticias9.png", time: new Date(), likes: [1, 2] },
        { _id: 13, user_id: 13, title: "Nada sabe como mmMmMcDonald's", docroute: "../images/news/anuncio4.png", time: new Date(), likes: [2, 3, 10] },
        { _id: 14, user_id: 14, title: "Electrónica aplicada a la robótica", docroute: "../images/news/noticias10.png", time: new Date(), likes: [3, 4, 8] },
        { _id: 15, user_id: 15, title: "Destapa la felicidad", docroute: "../images/news/anuncio5.png", time: new Date(), likes: [1, 2, 9] },
        { _id: 16, user_id: 16, title: "Casos prácticos en la industria", docroute: "../images/news/noticias11.png", time: new Date(), likes: [4, 5, 10] },
        { _id: 17, user_id: 1, title: "Retos actuales en ingeniería informática", docroute: "../images/news/noticias12.png", time: new Date(), likes: [2, 6, 8] },
        { _id: 18, user_id: 2, title: "El mejor dron de la historia", docroute: "../images/news/anuncio6.png", time: new Date(), likes: [3, 4, 7] },
        { _id: 19, user_id: 3, title: "Cómo estructurar un proyecto exitoso", docroute: "../images/news/noticias13.png", time: new Date(), likes: [1, 9, 10] },
        { _id: 20, user_id: 4, title: "La importancia de la ciberseguridad", docroute: "../images/news/noticias14.png", time: new Date(), likes: [2, 5, 6] }
    ];
    
    

    await db.collection("User").insertMany(users);
    await db.collection("Chat").insertMany(chats);
    await db.collection("Message").insertMany(messages);
    await db.collection("News").insertMany(news);

    console.log("Datos iniciales insertados.");
}

module.exports = seedDatabase;