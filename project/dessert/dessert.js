
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
    
})

$(document).ready(function () {
    $('#3box-cake').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: true,
        autoplay: false,
        responsive: {
            320: {
                items: 1
            },
            700: {
                items: 2
            },
            1300: {
                items: 3
            }
        }
    });
});

$(document).ready(function () {
    $('#4box-croissant').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: true,
        autoplay: false,
        responsive: {
            320: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 2
            },
            1300: {
                items: 4
            }
        }
    });
});

$(document).ready(function () {
    $('#3box-pudding').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: true,
        autoplay: false,
        responsive: {
            320: {
                items: 1
            },
            700: {
                items: 2
            },
            1300: {
                items: 3
            }
        }
    });
});












