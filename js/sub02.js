$(function () {
    //main slider

    $('.premium_black_main').bxSlider({
        pagerCustom: '.premium_black_cont',
        auto: true,
        autoControls: true,
    });


    // place_recommend 
    $('.where').click(function () {
        $('.where_inner').stop().slideDown(0);
    })
    $('.btn_close').click(function () {
        $('.where_inner').stop().slideUp(0);
    });

    // topbutton
    $('#topBtn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    });

});
