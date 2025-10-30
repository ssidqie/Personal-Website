const texts = ['Web Developer', 'Full-Stack Engineer', 'Informatics Student', 'Tech Enthusiast'];
const typingSpeed = 250;
const backSpeed = 100;
const delayBetweenTexts = 4000;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById('typed-text');
const cursorElement = document.getElementById('cursor');

function typeWriter() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
        textElement.innerHTML = currentText.substring(0, charIndex + 1);
        cursorElement.style.left = (textElement.offsetWidth) + 'px';
        charIndex++;
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, delayBetweenTexts);
            return;
        }
    } else {
        textElement.innerHTML = currentText.substring(0, charIndex - 1);
        cursorElement.style.left = (textElement.offsetWidth) + 'px';
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }
    setTimeout(typeWriter, isDeleting ? backSpeed : typingSpeed);
}

window.onload = function () {
    typeWriter();

    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero img');
    const elements = heroContent.querySelectorAll('h4, h1, #typed-container, h5');

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
    });

    heroImage.style.opacity = 0;
    heroImage.style.transform = 'translateX(50px)';
    heroImage.style.transition = 'all 1s ease';

    elements.forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 400 * i);
    });

    setTimeout(() => {
        heroImage.style.opacity = 1;
        heroImage.style.transform = 'translateX(0)';
    }, 1800);
};
