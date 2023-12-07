$(function () {
  //main slider

  $('.gallery_main').bxSlider({
    pagerCustom: '.thumnail_img',
    auto: true,
    autoControls: true,
  });

  // topbutton
  $('#topBtn').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500)
  });
});