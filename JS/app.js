//Nav toggle - select button and link
const navToggle = document.querySelector('#nav-toggle');
const nav = document.querySelector("#nav-links");

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open');
})

//Slider
document.addEventListener("DOMContentLoaded", () => {
    this.slider();
});

const slideImg = document.querySelector("#slide-img");
const images = [
    'images/header_1.jpg',
    'images/header_2.jpg',
    'images/header_3.jpg',
    'images/header_4.jpg',
];

const len = images.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout(() => {
        this.slider()
    }, 6000);
}

//ScrollRevall
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 1500,
    delay: 300,
});

ScrollReveal().reveal('.content-banner, h1, .about-us-description, .desc_serv, .price-btn', {
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200,
    opacity: 0.1
});
ScrollReveal().reveal('.logos-item, .btn-social', {
    delay: 100,
    origin: 'bottom',
    interval: 200,
    mobile: false
});

//Scroll up

const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollUp.classList.add('active');
    } else {
        scrollUp.classList.remove("active");
    }
});