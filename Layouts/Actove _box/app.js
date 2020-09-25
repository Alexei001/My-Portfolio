$(function () {


    /* fixed header */
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let burger = $('#burger');

    chechScroll(scrollPos, introH)

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        chechScroll(scrollPos, introH)
    });

    function chechScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* smooth scroll */
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');

        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 500);

        nav.removeClass('fixed');
    });

    /* burger menu */

    burger.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('fixed');

    });
    /* slider slick */
    $('.slider_slick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrow:false
    });

    
});