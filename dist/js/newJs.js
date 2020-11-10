AOS.init({
    disable: 'phone'
});

$(function () {
    $('.service_cat_list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        swipe: true,
        arrows: true,
        centerMode: true,
        infinite: true,
        appendArrows: $(".scroll_arrows"),
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});