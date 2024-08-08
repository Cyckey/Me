document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    const backToTopBtn = document.getElementById('back-to-top');
    const header = document.querySelector('header');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Toggle navigation menu
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('hidden');
    });

    // Show/Hide Back to Top Button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }

        // Hide/Show header on scroll
        let lastScrollTop = 0;
        const headerHeight = header.offsetHeight;
        if (window.scrollY > lastScrollTop) {
            header.style.top = `-${headerHeight}px`;
        } else {
            header.style.top = '0';
        }
        lastScrollTop = window.scrollY;
    });

    // Back to Top Button functionality
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
