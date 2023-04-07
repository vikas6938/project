
// Main Section start -->
$('.slider-10').owlCarousel({
    loop: true,
    margin: 20,
    dots:true,
    autoplay: {
        delay: 1000,
    },
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items:1,
        }
    }
});

    // Main Section End -->

    // Auction section start -->
   
    $('.auction-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1400: {
                items: 3,
            }
        }
    });
 
      // Auction section end -->

    //   Collection Section Start-->
    $('.collection-slide').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
    //   Collection Section End -->
   
    // Category Section Start-->
    $('.slider-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }
    })

    // Play Button Start

    
    // Top-btn start
    $(window).scroll(function () {
        if (scrollY > 200) {
            $('.top-btn').fadeIn(1000);
        }
        else {
            $('.top-btn').fadeOut();
        }
    });
    $('.top-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    
    // Loader Start

    $(window).on('load', function(){
        $('.loader').fadeOut(6000)

    })