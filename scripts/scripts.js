

$(document).ready(function() {

  
      // .scroll() creates an event when the user scrolls
      $(window).scroll(function () {

        // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
        var scroll = $(window).scrollTop();
        var navOverlay=$('.overlay-nav');
            

        if (scroll > 200 || navOverlay.hasClass("reveal-nav")) {
            $('#main-navbar').addClass('displayNav');
        } else {
            $('#main-navbar').removeClass('displayNav');
        }
    });


    $('.introCarousel').owlCarousel({
      loop: false,
      responsiveClass: true,
      margin:0,
      nav: true,
      navText: ["", ""],
      dots: false,
      items: 1
    });

    $('.genericCarousel').owlCarousel({
      loop: false,
      responsiveClass: true,
      margin:0,
      nav: true,
      navText: ["", ""],
      dots: false,
      items: 1
    });

   

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
    });


    /*Scroll to top*/
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
    });
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
    }); 

  })




 