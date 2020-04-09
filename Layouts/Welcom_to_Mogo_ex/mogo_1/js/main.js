console.log('hello world!');



let headerIntro = document.querySelector('#header');
let introH = document.getElementById('intro').clientHeight;
/* header--intro*/
window.addEventListener('scroll', scroll = () => { 
    let scrollNow = pageYOffset;
    if (scrollNow > introH)
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
               /*  let blockId = elem.getAttribute('data-scroll');
                let block=document.querySelector(`${blockId}`);
                alert('Текущая прокрутка сверху: ' + window.pageYOffset); */
               let about=document.querySelector('#about');
               console.log(about.window.pageYOffset); 
    })
    
    
        
    }
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
