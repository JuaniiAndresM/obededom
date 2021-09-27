$(document).ready(function () {
    $('#header').load('/web/header.html');
    $('#footer').load('/web/footer.html');

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

function initMap() {

  const coord = { lat: -34.9061805, lng: -56.1931176 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: coord,
  });

  const marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}