jQuery(document).ready(function () {
// Header fixed animated
$(window).on("scroll", function () {
  let scrolled = $(this).scrollTop();
  if (scrolled > 200) {
    $(".header-wrap").addClass("active");
  }
  if (scrolled <= 200) {
    $(".header-wrap").removeClass("active");
  }
  });


  
  // мобильное меню
  $('.menu-humb__wrap').on('click', function () {
    $('.menu-humb').addClass('active');
    $('.menu-mob').addClass('active');
    $('.header-wrap').addClass('menu_active');
  });




  //close mob menu
  $("#btn-close").on('click', function () {
    $('.menu-mob').removeClass('active');
    $('.header-wrap').removeClass('menu_active');
  })
});
