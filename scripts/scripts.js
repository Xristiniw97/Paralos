$(document).ready(function() {
    $('.magazineCarousel').owlCarousel({
      loop: false,
      responsiveClass: true,
      margin:0,
      nav: true,
      navText: ["", ""],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2

        },
        1024: {
          items: 3
        }
      }
    })
  })