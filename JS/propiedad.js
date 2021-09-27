$(document).ready(function () {
    createSliderPropiedad();
});

function createSliderPropiedad(){
    new Glider(document.querySelector('.slider-content-propiedad'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: false,
        dots: '.slider-indicators',
        arrows: {
            prev: '.slider-anterior',
            next: '.slider-siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 1110,
              settings: {

                slidesToShow: '1',
                slidesToScroll: '1',
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
}