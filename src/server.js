const express = require('express');
const path = require('path');
var createError = require('http-errors');   // módulo para manejar errores HTTP
var http = require('http');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();
var PORT = process.env.PORT || 3000;


// Middleware para determinar si es admin
app.use((req, res, next) => {
  res.locals.isAdmin = false;
  next();
});


// Configuración de EJS como motor de vistas y views el directorio de las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos
app.use(express.json());    
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var indexRouter = require('./routes/index');
var alertasRouter = require('./routes/alertas');
var dashboardRouter = require('./routes/dashboard');
var editProfileRouter = require('./routes/editProfile');
var historyRouter = require('./routes/history');
var loginRouter = require('./routes/login');
var messagesRouter = require('./routes/messages');
var profileRouter = require('./routes/profile');
var publicationRouter = require('./routes/publication');
var registerRouter = require('./routes/register');
var reportedUsersRouter = require('./routes/reportedUsers');
var resetPasswordRouter = require('./routes/resetPassword');
var resourcesRouter = require('./routes/resources');
var usersRouter = require('./routes/users');

// Rutas para cada archivo EJS en views
app.use('/', indexRouter);
app.use('/alertas', alertasRouter);
app.use('/dashboard', dashboardRouter);
app.use('/editProfile', editProfileRouter);
app.use('/history', historyRouter);
app.use('/login', loginRouter);
app.use('/messages', messagesRouter);
app.use('/profile', profileRouter);
app.use('/publication', publicationRouter);
app.use('/register', registerRouter);
app.use('/reportedUsers', reportedUsersRouter);
app.use('/resetPassword', resetPasswordRouter);
app.use('/resources', resourcesRouter);
app.use('/users', usersRouter);

// app.get('/test', (req, res) => {
//     res.render('test', { title: 'Test', css: 'mainItems', currentPage: 'test' })
// });

// Manejo de errores 404 y reenvío al manejador de errores
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

// Manejador de errores
app.use(function(err, req, res, next) {
  // Definir locales, solo proporcionar errores en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // Renderizar la página de error
  res.status(err.status || 500);
  res.render('error');
});


// Crear el servidor HTTPs
const server = http.createServer(app);

// Iniciar el servidor - escuhar en puerto
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

  
module.exports = app;