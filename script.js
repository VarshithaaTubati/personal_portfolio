const themeButton = document.getElementById('theme-button');
const themeColors = document.querySelectorAll('.color-btn');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

themeColors.forEach(color => {
    color.addEventListener('click', () => {
        document.documentElement.style.setProperty('--pink', color.dataset.color);
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
