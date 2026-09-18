// ======================================================================
// 1. CAMBIO DE TEMA (INTERRUPTOR)
// ======================================================================
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    const currentTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (currentTheme === 'light' || (!currentTheme && prefersLight)) {
        document.documentElement.classList.add('light-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        if (document.documentElement.classList.contains('light-theme') ||
            (!document.documentElement.classList.contains('dark-theme') && prefersLight)) {
            document.documentElement.classList.remove('light-theme');
            document.documentElement.classList.add('dark-theme');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark-theme');
            document.documentElement.classList.add('light-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}