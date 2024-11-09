const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de EJS como motor de vistas y views el directorio de las vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Rutas para cada archivo HTML en ./public/html
app.get('/', (req, res) => res.render('index'));
app.get('/alertas', (req, res) => res.render('alertas'));
app.get('/dashboard', (req, res) => res.render('dashboard'));
app.get('/edit_profile', (req, res) => res.render('edit_profile'));
app.get('/history', (req, res) => res.render('history'));
app.get('/login', (req, res) => res.render('login'));
app.get('/messages', (req, res) => res.render('messages'));
app.get('/profile', (req, res) => res.render('profile'));
app.get('/publication', (req, res) => res.render('publication'));
app.get('/register', (req, res) => res.render('register'));
app.get('/reportedUsers', (req, res) => res.render('reportedUsers'));
app.get('/reset_password', (req, res) => res.render('reset_password'));
app.get('/resources', (req, res) => res.render('resources'));
app.get('/users', (req, res) => res.render('users'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
