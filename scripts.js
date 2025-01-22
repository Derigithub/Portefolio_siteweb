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
