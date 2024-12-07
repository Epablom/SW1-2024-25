const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;

// Configuración de EJS para las vistas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware para servir archivos estáticos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Configuración del manejo de sesiones
app.use(
  session({
    secret: "secreto", // Usa un secreto fuerte en producción
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware para manejar mensajes de sesión
app.use((req, res, next) => {
  res.locals.message = req.session.message || null;
  res.locals.error = req.session.error || null;
  delete req.session.message;
  delete req.session.error;
  next();
});

// Middleware para configurar el rol del usuario y verificar si es administrador
app.use((req, res, next) => {
  res.locals.isAdmin = req.session.user && req.session.user.role === "admin";
  res.locals.user = req.session.user || null;
  next();
});

// Middleware para mostrar el popup de consentimiento de cookies
app.use((req, res, next) => {
  res.locals.showCookiePopup = !req.cookies.cookiePreferences;
  next();
});

// Ruta para guardar las preferencias de cookies desde el frontend
app.post("/set-cookie-preferences", (req, res) => {
  const preferences = req.body; // Recoge las preferencias desde el frontend
  res.cookie("cookiePreferences", JSON.stringify(preferences), {
    httpOnly: true,
    maxAge: 365 * 24 * 60 * 60 * 1000, // La cookie expirará en 1 año
  });
  res.json({ success: true });
});

// Servir archivos estáticos (JavaScript, CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Rutas principales
app.use("/", require("./routes/main"));

// Middlewares para autenticación y autorización
const { isAuthenticated, isAdmin } = require("./middlewares/auth");

// Rutas protegidas
app.use("/profile", isAuthenticated, require("./routes/profile"));
app.use("/messages", isAuthenticated, require("./routes/messages"));

// Rutas protegidas para administradores
app.use("/dashboard", isAuthenticated, isAdmin, require("./routes/dashboard"));

// Rutas de autenticación
app.use("/auth", require("./routes/auth"));

// Manejo de errores para rutas no definidas (404)
app.use((req, res, next) => {
  res.status(404).render("404", { title: "Página No Encontrada" }); // Renderiza una página 404 personalizada
});

// Comunicación en tiempo real utilizando socket.io
io.on("connection", (socket) => {
  console.log(`Un usuario se conectó: ${socket.id}`);

  // Unirse a una sala para mensajería privada (única para cada par usuario-contacto)
  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`Usuario con ID ${socket.id} se unió a la sala: ${room}`);
  });

  // Manejar el envío de un mensaje a una sala específica (mensajería privada)
  socket.on("sendMessage", (data) => {
    const { room, content, sender } = data;
    console.log(`Mensaje de ${sender} a la sala ${room}: ${content}`);

    // Emitir el mensaje a todos los usuarios en la sala
    io.to(room).emit("receiveMessage", {
      content: content,
      sender: sender,
      room: room,
    });
  });

  // Notificar a todos los usuarios cuando alguien se desconecta (limpieza específica de la sala)
  socket.on("disconnect", () => {
    console.log(`Un usuario se desconectó: ${socket.id}`);
  });
});

// Iniciar el servidor y escuchar en el puerto definido
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
