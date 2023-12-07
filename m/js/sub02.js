$(function(){
    // black 이번주 pick
    $('.premium_black_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.premium_black_cont'
      });

      $('.premium_black_cont').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.premium_black_main',
        dots: false,
        centerMode: false,
        focusOnSelect: false,
      });

      // topbutton
    $('#topBtn').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500)
    });
})