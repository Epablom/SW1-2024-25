const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const http = require('http'); 
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;

// Configuración de EJS como motor de vistas y views el directorio de las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Middleware para manejo de sesiones
app.use(session({
  secret: "secreto",
  resave: false,
  saveUninitialized: true,
  mainUser: null
}));

// Middleware para manejar mensajes de sesión
app.use((req, res, next) => {
  res.locals.message = req.session.message || null;
  res.locals.error = req.session.error || null;
  delete req.session.message;
  delete req.session.error;
  next();
});

// Middleware para determinar si es admin
app.use((req, res, next) => {
  if (!res.locals.isAdmin) { res.locals.isAdmin = false; }
  if (!req.session.mainUser) { res.locals.mainUser = null; }
  if (req.session.mainUser) { res.locals.mainUser = req.session.mainUser; }
  if (req.session.mainUser) { res.locals.isAdmin = req.session.mainUser.admin; }
  next();
});

// Middleware para verificar si el usuario ya aceptó/rechazó las cookies
app.use((req, res, next) => {
  res.locals.showCookiePopup = !req.cookies.cookiePreferences; // Muestra el popup si no existe la cookie
  next();
});

// Ruta para guardar las preferencias de cookies
app.post('/set-cookie-preferences', (req, res) => {
  const preferences = req.body; // Recoge las preferencias enviadas desde el frontend
  res.cookie('cookiePreferences', JSON.stringify(preferences), {
    httpOnly: true, // Protege la cookie del acceso desde JS
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 año de duración
  });
  res.json({ success: true });
});

// Rutas principales
app.use(express.static(path.join(__dirname, 'public'))); //el servidor está sirviendo como contenido estático todo lo que está dentro de la carpeta public
app.use('/', require('./routes/main'));

// Rutas protegidas por autenticación
const { isAuthenticated, isAdmin } = require('./middlewares/auth');
app.use('/profile', isAuthenticated, require('./routes/profile'));
app.use('/messages', isAuthenticated, require('./routes/messages'));

// Rutas protegidas por autenticación y autorización
app.use('/dashboard', isAuthenticated, isAdmin, require('./routes/dashboard'));

// Rutas de autenticación
app.use('/auth', require('./routes/auth'));

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


