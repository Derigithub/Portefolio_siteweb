// Fade out loader and show main content after 3 seconds
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').classList.add('fade-out');
        document.getElementById('main-content').style.display = 'block';
    }, 3000);
});

// Sidebar toggle functionality
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});
// Basculement entre les modes clair et sombre
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Vérifiez le thème initial
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    // Basculer les icônes
    if (body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});
