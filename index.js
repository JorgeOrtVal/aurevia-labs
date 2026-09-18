document.addEventListener('DOMContentLoaded', () => {
    // ======================================================================
    // 1. ANIMACIÓN DE ENTRADA DE LAS TARJETAS (Efecto "Fade In Up")
    // =====================================================================
    const cards = document.querySelectorAll('.app-card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // ======================================================================
    // 2. EFECTO DE LUZ QUE SIGUE AL RATÓN (Hover interactivo)
    // =====================================================================
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

// ======================================================================
// 3. CAMBIO DE TEMA (INTERRUPTOR)
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
