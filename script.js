// Dark mode toggle
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', body.classList.contains('dark'));
  updateDarkModeToggle();
}
function updateDarkModeToggle() {
  const btn = document.getElementById('darkModeToggle');
  if (!btn) return;
  if (document.body.classList.contains('dark')) {
    btn.textContent = '☀️ Light Mode';
  } else {
    btn.textContent = '🌙 Dark Mode';
  }
}
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }
  updateDarkModeToggle();
}); 