/* Sidebar */
const sidebar = document.querySelector('#sidebar');
const sidebarToggler = document.querySelector('.sidebar-toggler');

// Toggling the Sidebar
sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

// Closing the Sidebar on clicking Outside and on the Sidebar-Links
window.addEventListener('click', (e) => {
    if (e.target.id !== 'sidebar' && e.target.className !== 'sidebar-toggler') {
        sidebar.classList.remove('show');
    }
});
