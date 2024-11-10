const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Funciones para abrir y cerrar el panel de login
function openLoginPanel() {
    document.getElementById('overlay').classList.add('show');
    document.getElementById('loginPanel').classList.add('show');
}

function closeLoginPanel() {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('loginPanel').classList.remove('show');
}

// Cerrar el panel al hacer clic fuera del área del panel
document.getElementById('overlay').addEventListener('click', closeLoginPanel);
