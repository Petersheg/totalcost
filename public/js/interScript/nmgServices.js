$(function() {
    $('.gallery_slides').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3,
        dots: false,
        speed: 500,
        variableWidth: true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    });
})