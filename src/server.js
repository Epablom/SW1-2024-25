const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de EJS como motor de vistas y views el directorio de las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos
app.use(express.json());    
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "secreto",
  resave: false,
  saveUninitialized: true,
  mainUser: null
}));

// Middleware para mensajes de sesión
app.use((req, res, next) => {
  res.locals.message = req.session.message || null;
  res.locals.error = req.session.error || null;
  delete req.session.message;
  delete req.session.error;
  next();
});

// Middleware para determinar si es admin
app.use((req, res, next) => {
  if (!res.locals.isAdmin) {res.locals.isAdmin = false;}
  if (!req.session.user) {res.locals.user = null;}
  if (req.session.user) {res.locals.user = req.session.user;}
  if (req.session.user && req.session.user.role === 'admin') {
    res.locals.isAdmin = true;
  }
  next();
});

const { isAuthenticated, isAdmin } = require('./middlewares/auth');

app.use(express.static(path.join(__dirname, 'public')));
// Rutas principales
app.use('/', require('./routes/main'));

// Rutas protegidas por autenticación
app.use('/profile', isAuthenticated, require('./routes/profile'));
app.use('/messages', isAuthenticated, require('./routes/messages'));

// Rutas protegidas por autenticación y autorización
app.use('/dashboard', isAuthenticated, isAdmin, require('./routes/dashboard'));

// Rutas de autenticación
app.use('/auth', require('./routes/auth'));

// Manejo de errores 404 y reenvío al manejador de errores
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});






// app.use((req,res,next) => {
//   const message = req.session.message;
//   const error = req.session.error;
//   delete req.session.message;
//   delete req.session.error;
//   res.locals.message = "";
//   res.locals.error = "";
//   if(message){res.locals.message = `<p>${message}</p>`};
//   if(error){res.locals.error = `<p>${error}</p>`};
//   next();
// });

// var indexRouter = require('./routes_old/index');
// var alertasRouter = require('./routes/alertas');
// var dashboardRouter = require('./routes_old/dashboard');
// var editProfileRouter = require('./routes/editProfile');
// var historyRouter = require('./routes/history');
// var loginRouter = require('./routes_old/login');
// var messagesRouter = require('./routes_old/messages');
// var profileRouter = require('./routes_old/profile');
// var publicationRouter = require('./routes_old/publication');
// var registerRouter = require('./routes/register');
// var reportedUsersRouter = require('./routes/reportedUsers');
// var resetPasswordRouter = require('./routes/resetPassword');
// var resourcesRouter = require('./routes/resources');
// var usersRouter = require('./routes/users');

// Rutas para cada archivo EJS en views
// app.use('/', indexRouter);
// app.use('/alertas', alertasRouter);
// app.use('/dashboard', dashboardRouter);
// app.use('/editProfile', editProfileRouter);
// app.use('/history', historyRouter);
// app.use('/login', loginRouter);
// app.use('/messages', messagesRouter);
// app.use('/profile', profileRouter);
// app.use('/publication', publicationRouter);
// app.use('/register', registerRouter);
// app.use('/reportedUsers', reportedUsersRouter);
// app.use('/resetPassword', resetPasswordRouter);
// app.use('/resources', resourcesRouter);
// app.use('/users', usersRouter);

// app.get('/test', (req, res) => {
//     res.render('test', { title: 'Test', css: 'mainItems', currentPage: 'test' })
// });



// // Manejador de errores
// app.use(function(err, req, res, next) {
//   // Definir locales, solo proporcionar errores en desarrollo
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // Renderizar la página de error
//   res.status(err.status || 500);
//   res.render('error');
// });

// Crear el servidor HTTPs
// const server = http.createServer(app);

// // Iniciar el servidor - escuhar en puerto
// server.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

  
// module.exports = app;