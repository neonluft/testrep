console.log("JS is connected! 🚀");

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Apply saved theme preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
  toggleButton.textContent = '☀️ Light Mode';
}

toggleButton.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';

  if (isDark) {
    body.removeAttribute('data-theme');
    toggleButton.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    toggleButton.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  }
});