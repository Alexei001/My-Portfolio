console.log('hello world!');



let headerIntro = document.querySelector('#header');
let introH = document.getElementById('intro').clientHeight;
/* header--intro*/
window.addEventListener('scroll', scroll = () => {
    let scrollNow = pageYOffset;
    if (scrollNow >= introH)
        (headerIntro.classList.add('fixed', 'active'))
    else
        (headerIntro.classList.remove('fixed', 'active'))

})

let navLinkArr = document.querySelectorAll('.nav_link');

for (let elem of navLinkArr) {

    elem.addEventListener('click', fync = (event) => {
        event.preventDefault();
        for (let elements of navLinkArr) {
            elements.classList.remove('active');
            elem.classList.add('active');
        }
        /* smooth scroll */
        let blockId = elem.getAttribute('data-scroll');
        document.querySelector(`${blockId}`).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    })
}

/* logo */
let logo = document.querySelector('.header_logo');
logo.addEventListener('click', fync = () => {
    let coordLogo = logo.getAttribute('data-scroll');
    document.querySelector(`${coordLogo}`).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

})

/* slider */
let sliderItemArr = document.querySelectorAll('.slider__item');

for (let elem of sliderItemArr) {
    elem.addEventListener('click', func = () => {
        for (let elements of sliderItemArr) {
            elements.classList.remove('active');
            elem.classList.add('active');
        }
    })
}

/* nav_togle */

let navTogle = document.querySelector('.nav-togle');

navTogle.addEventListener('click', func = () => {
    
        navTogle.classList.toggle('active');
        document.getElementById('nav').classList.toggle('active');
})

/* acordion */

let acordion=document.querySelectorAll('.accordion__item');

for(let item of acordion){
    item.addEventListener('click', func=()=>{
        item.classList.toggle('active');
    })
}

/* reviews slider*/

var slideIndex=1;
showSlides(slideIndex);
function sliderPlus(n){
    showSlides(slideIndex+=n);
}

function curentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    var i;
    var arrItem=document.getElementsByClassName('reviews__item'); 
    var arrItems2=document.getElementsByClassName('reviews__items2'); 
     if (n > arrItem.length) {slideIndex = 1}    
     if (n > arrItems2.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = arrItem.length}
    if (n < 1) {slideIndex = arrItems2.length}
    for (i = 0; i < arrItem.length; i++) {
        arrItem[i].style.display = "none";  
    }
    for (i = 0; i < arrItems2.length; i++) {
        arrItems2[i].style.display = "none";  
    }
    arrItem[slideIndex-1].style.display = "block";   
    arrItems2[slideIndex-1].style.display = "block";   
}