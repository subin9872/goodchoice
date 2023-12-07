$(function(){
    $('.gallery_main').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        slideWidth: 720,
        pager: false
      });


    $('.tab_menu > div').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $(window).scroll(function(){
        var sTop = $('html,body').scrollTop();
        console.log(sTop);
    })

    // tabmenu
    $('.tab01').click(function(){
        $('html,body').animate({
            scrollTop:957
        },500)
    })

    $('.tab02').click(function(){
        $('html,body').animate({
            scrollTop:3056
        },500)
    })

    $('.tab03').click(function(){
        $('html,body').animate({
            scrollTop:3774
        },500)
    })

    // topbutton
    $('#topBtn').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500)
    })
}); 