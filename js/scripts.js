// Header fixed animated
$(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    if( scrolled > 200 ) {
      $(".header-wrap").addClass("active");
    }
    if( scrolled <= 200 ) {
      $(".header-wrap").removeClass("active");
    }
   // мобильное меню
$('.menu-humb').on('click', function () {
  $(this).toggleClass('active');
  $('.menu-mob').toggleClass('active');
  $('.header-wrap').toggleClass('menu_active');
});
//close mob menu
$("#btn-close").click(function(){
  $('.menu-mob').removeClass('active');
  $('.header-wrap').removeClass('menu_active');
  $("#menu-mob").hide();

})
});