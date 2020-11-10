
var controller = new ScrollMagic.Controller();
        
$(function() {
    var scene = new ScrollMagic.Scene({
        offset: 450,
        duration: 1750
    }) 
    .setPin('#pinned_bar')
    .addTo(controller)
    
    $('.gallery_slides').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '30px',
        autoplay: true,
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
    
    $('#related_services').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        swipe: true,
        arrows: true,
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
})
        
// Cache selectors
var lastId, topMenu = $("#menu_nav"),
topMenuHeight = topMenu.outerHeight(),
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 500);
      e.preventDefault();
    });

    // Bind to scroll
$(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;

       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";

       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
       }                   
    });