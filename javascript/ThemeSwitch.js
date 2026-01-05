// Theme toggle
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.onclick = () => {
        document.body.classList.toggle('light-mode');       // Switch theme

        if (document.body.classList.contains('light-mode')) {
            themeToggle.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');         // Save preference
        } else {
            themeToggle.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');          // Save preference
        }
    };

    // Load saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙 Dark Mode';
    }
}