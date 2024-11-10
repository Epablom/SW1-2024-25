const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para determinar si es admin
app.use((req, res, next) => {
  res.locals.isAdmin = false;
  next();
});

// Configuración de EJS como motor de vistas y views el directorio de las vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Rutas para cada archivo HTML en ./public/html
app.get('/', (req, res) => {
    res.render('index', { title: 'StudyHub', css: 'mainItems', currentPage: 'index' });
});

app.get('/alertas', (req, res) => {
    res.locals.isAdmin = true;
    res.render('alertas', { title: 'Alertas', css: 'admin', currentPage: 'alertas' })
});

app.get('/dashboard', (req, res) => {
    res.locals.isAdmin = true;
    res.render('dashboard', { title: 'Panel de Administrador', css: 'admin', currentPage: 'dashboard' })
});

app.get('/editProfile', (req, res) => {
    res.render('editprofile', { title: 'Editar Perfil', currentPage: 'edit_profile' })
});

app.get('/history', (req, res) => {
    res.locals.isAdmin = true;
    res.render('history', { title: 'Historial de Notificaciones', css: 'admin', currentPage: 'history' })
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login', currentPage: 'login' })
});

app.get('/messages', (req, res) => {
    res.render('messages', { title: 'Mensajes', currentPage: 'messages' })
});

app.get('/profile', (req, res) => {
    res.render('profile', { title: 'Perfil', currentPage: 'profile' })
});

app.get('/publication', (req, res) => {
    res.render('publication', { title: 'Publicación', css: 'mainItems', currentPage: 'publication' })
});

app.get('/register', (req, res) => {
    res.render('register', { title: 'Registro', currentPage: 'register' })
});

app.get('/reportedUsers', (req, res) => {
    res.render('reportedUsers', { title: 'Usuarios Repotados', css: 'admin', currentPage: 'reportedUsers' })
});

app.get('/resetPassword', (req, res) => {
    res.render('resetPassword', { title: 'Reiniciar Contraseña', currentPage: 'reset_password' })
});

app.get('/resources', (req, res) => {
    res.render('resources', { title: 'Recursos', css: 'mainItems', currentPage: 'resources' })
});

app.get('/users', (req, res) => {
    res.locals.isAdmin = true;
    res.render('users', { title: 'Usuarios', css: 'admin', currentPage: 'users' })
});
app.get('/test', (req, res) => {
    res.render('test', { title: 'Test', css: 'mainItems', currentPage: 'test' })
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
