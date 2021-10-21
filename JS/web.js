$(document).ready(function () {
    $('#header').load('/obededom/web/header.html');
    $('#footer').load('/obededom/web/footer.html');
    cargoPropiedades();
    createSlider();
});

function createSlider(){
    new Glider(document.querySelector('.slider-content'), {
        slidesToShow: 4,
        slidesToScroll: 4,
        scrollLock: false,
        dots: '.slider-indicators',
        arrows: {
            prev: '.slider-anterior',
            next: '.slider-siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 200,
              settings: {

                slidesToShow: '1',
                slidesToScroll: '1',
                itemWidth: 150,
                duration: 0.25
              }
            },{
                // screens greater than >= 1024px
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  itemWidth: 150,
                  duration: 0.25
                }
              },{
              // screens greater than >= 1024px
              breakpoint: 1050,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
                // screens greater than >= 1024px
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  itemWidth: 150,
                  duration: 0.25
                }
              }
        ]
    });
}

