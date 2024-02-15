const gnb_title = $('.gnb li');

gnb_title.hover(
    function() {
        $(this).children('.sub').stop().slideDown();
    }, 
    function() { 
        $(this).children('.sub').stop().slideUp();
    }
);


// tab
$('.tab-menu p').on('click',function(){
    let index = $('.content3 .new-info .tab-menu p').index(this);
    $('.tab-menu p').removeClass('on');
    $('.tab-menu p:eq('+ index +')').addClass('on');
    $('.content3 .new-info .new-info-content').removeClass('on');
    $('.content3 .new-info .new-info-content:eq('+ index +')').addClass('on');

})

//mobile-tab
$('.content3 .m-new-info p').on('click',function(){
    let index = $('.content3 .m-new-info p').index(this);
    $('.content3 .m-new-info p').removeClass('on');
    $('.content3 .m-new-info p:eq('+ index +')').addClass('on');
    $('.content3 .m-new-info .new-info-content').removeClass('on');
    $('.content3 .m-new-info .new-info-content:eq('+ index +')').addClass('on');
})