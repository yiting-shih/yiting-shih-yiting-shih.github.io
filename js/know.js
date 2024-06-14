$(function () {
    // header下拉式選單
    $('.dropdown').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active').siblings().slideUp();
        $(this).siblings().slideToggle();
    });
    $('header, main').click(() => {
        $('.dropdown-item').slideUp();
    })

    // offcanvas_RWD滑動式選單
    $('.menuL, .back').click(function () {
        $('.menuL, .back, .slide-menuM').toggleClass('active');
    });

});