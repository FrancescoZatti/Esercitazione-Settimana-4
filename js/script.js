let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let button = document.getElementById('button');
    let navigationElements = document.getElementsByClassName('navigation');

    let scrollPosition = window.scrollY;
    let alpha = Math.min(scrollPosition / 620, 1);

    if (header) {
        header.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
    }
    if (button) {
        button.style.backgroundColor = `rgba(0, 128, 0, ${alpha})`;

        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = 'rgba(0, 128, 0, 0.5)';
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = `rgba(0, 128, 0, ${alpha})`;
        });
    }

    for (let i = 0; i < navigationElements.length; i++) {
        let navElement = navigationElements[i];

        navElement.addEventListener('mouseover', function() {
            navElement.style.color = 'rgba(0, 128, 0)';
        });

        navElement.addEventListener('mouseout', function() {
            navElement.style.color = '';
        });
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