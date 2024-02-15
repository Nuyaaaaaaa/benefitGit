// Header fixed animated
$(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    if( scrolled > 200 ) {
      $(".header-wrap").addClass("active");
    }
    if( scrolled <= 200 ) {
      $(".header-wrap").removeClass("active");
    }
   
  });