$(function () {

    // search button on
    $('.searchTerm').click(function () {
        $('.search_on').stop().slideDown(0);
    })
    $('.btn_close').click(function () {
        $('.search_on').stop().slideUp(0);
    });


    //navigation
    $('.main-menu ul li').mouseover(function () {
        $(this).find('.sub-menu').stop().slideDown(500);
    }).mouseout(function () {
        $(this).find('.sub-menu').stop().slideUp(500);
    });

    // hot slider
    $('.weekly-best-pension-cont').bxSlider({
        minSlides: 5,
        maxSlides: 5,
        slideWidth: 350,
        slideMargin: 20,
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        moveSlides: 1,
        touchEnabled: false,
        // speed: 500,
    });

    $('.oversea-best-city-cont').bxSlider({
        minSlides: 6,
        maxSlides: 6,
        slideWidth: 173,
        slideMargin: 18,
        pager: false,
        moveSlides: 1,
    });


    // event slider
    $('.event-inner').bxSlider({
        minSlides: 3,
        maxSlides: 5,
        slideWidth: 450,
        slideMargin: 36,
        pager: false,
        moveSlides: 1,
    });

    // oversea special
    $('.special-banner').mouseover(function () {
        var pic = $(this).children('img').attr('src');
        var picurl = 'url(' + pic + ')';
        $('.oversea-special-price').css('background', picurl);
    });

    // news slider
    $('.news-info').bxSlider({
        mode: 'vertical',
        slideMargin: 6,
        pager: false,
        auto: true,
        speed: 500,
    });

    // topbutton
    $('#topBtn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    });

});