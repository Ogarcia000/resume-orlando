// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width');
        }
    });
});

document.querySelectorAll('.skill-progress').forEach((bar) => {
    bar.style.width = '0';
    bar.setAttribute('data-width', bar.style.width);
    observer.observe(bar);
}); 