let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let button = document.getElementById('button');
    
    let scrollPosition = window.scrollY;
    let alpha = Math.min(scrollPosition / 620, 1);

    if (header) {
        header.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
    }
    if (button) {
        button.style.backgroundColor = `rgba(0, 128, 0, ${alpha})`; 
    }
    if (scrollPosition < (scrollPosition / 620, 1)) {
        if (header) {
            header.style.backgroundColor = '';
        }
        if (button) {
            button.style.backgroundColor = '';
        }
    }
    lastScrollPosition = scrollPosition;
});