const gnb_title = $('.gnb li');

gnb_title.hover(
    function() {
        $(this).children('.sub').stop().slideDown(function() {
            // 하위 메뉴가 펼쳐진 후에 .bg-gnb 요소의 높이를 설정
            $('.bg-gnb').height($(this).outerHeight());
        });
        // .bg-gnb 요소 표시
        $('.bg-gnb').show();
    }, 
    function() {
        // 해당 메뉴 항목의 하위 메뉴 숨김
        $(this).children('.sub').stop().slideUp();
        // .bg-gnb 요소 숨김
        $('.bg-gnb').hide();
    });



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