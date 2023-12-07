$(function () {
    // mobile
    //menubar on 
    $('.menu_icon').click(function(){
        $('.menu_on').animate({
            left:0
        })
    })
    $('.close_btn').click(function(){
        $('.menu_on').animate({
            left:'-100%'
        })
    })

    // search on
    // $('.doc_search').click(function(){
    //     $('.search_on').stop().slideDown(0);
    // })
    // $('.back_btn').click(function(){
    //     $('.search_on').stop().slideUp(0);
    // });

    // hot slider
    $('.weekly-best-pension-cont').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 180,
        slideMargin: 12,
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        moveSlides: 1,
        touchEnabled: true,
        speed: 500,
    });

    // event slider
    $('.event-inner').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 450,
        slideMargin: 36,
        pager: true,
        moveSlides: 1,
        // auto:true;
        // pagerType:'short'
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
    $('#topBtn').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500)
    });

});