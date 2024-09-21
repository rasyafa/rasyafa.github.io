// Function to set theme based on localStorage or default to light mode
function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
}

// Get saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light-mode';
setTheme(savedTheme);

// Button event listeners
document.getElementById('darkModeBtn').addEventListener('click', function () {
    setTheme('dark-mode');
});

document.getElementById('lightModeBtn').addEventListener('click', function () {
    setTheme('light-mode');
});

// Add hover effect to client logos
