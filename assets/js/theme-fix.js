// assets/js/theme-fix.js
function applyTheme() {
  const saved = localStorage.getItem('docmd-theme');
  if (saved) {
    document.body.setAttribute('data-theme', saved);
  }
}

applyTheme();

document.addEventListener('docmd:page-ready', applyTheme);
document.addEventListener('docmd:navigate', applyTheme);
