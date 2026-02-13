document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const burgerMenu = document.querySelector('.burger-menu');
    const tabs = document.querySelector('.tabs');

    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Close mobile menu after selection
            if (window.innerWidth <= 768) {
                tabs.classList.remove('active');
                burgerMenu.classList.remove('active');
            }
            window.scrollTo({ top: 0, behavior: 'auto' });
        });
    });

    // Burger menu toggle
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        tabs.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!tabs.contains(e.target) && !burgerMenu.contains(e.target)) {
                tabs.classList.remove('active');
                burgerMenu.classList.remove('active');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            tabs.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });
});
