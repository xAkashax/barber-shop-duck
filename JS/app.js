//nav toggle - select button and link
const navToggle = document.querySelector('#nav-toggle')
const nav = document.querySelector("#nav-links")

//add event listener 
navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})


//Slider
const slideImg = document.querySelector("#slide-img");
console.log(document.body)
const images = new Array(
    'images/header_1.jpg',
    'images/header_2.jpg',
    'images/header_3.jpg',
    'images/header_4.jpg'
    ); 

const len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    // setTimeout('slider()',3000);
}

//Scroll up

const scrollUp = document.querySelector('.scroll-up')

window/addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        scrollUp.classList.add('active');
    }else{
        scrollUp.classList.remove("active");
    }

});