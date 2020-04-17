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

/* reviews carousel*/

let reviewsArr=document.querySelectorAll('.reviews__item');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
 prev.addEventListener('click', func=(event)=>{
    event.preventDefault();
     console.log('prev')
 })
  
next.addEventListener('click', func=(event)=>{
    event.preventDefault();
    console.log('next')
})