// assets/js/theme-fix.js
function applyTheme() {
  const saved = localStorage.getItem('docmd-theme');
  const theme =
    saved ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light');
  document.body.setAttribute('data-theme', theme);
}

applyTheme();

document.addEventListener('docmd:page-ready', applyTheme);
document.addEventListener('docmd:navigate', applyTheme);
