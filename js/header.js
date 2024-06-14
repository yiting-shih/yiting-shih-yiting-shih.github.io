$(function () {
  // header下拉式選單
  $('.dropdown').click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active').siblings().slideUp();
    $(this).siblings().slideToggle();
  });
  $('header, main').click(function () {
    $('.dropdown-item').slideUp();
  });

  // offcanvas_RWD滑動式選單
  $('.menuL, .back').click(function() {
    $('.menuL, .back, .slide-menuM').toggleClass('active');
  });

  // 簡化前的程式碼
  // $('.dropdown').click(function() {
  //   $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active');
  //   $(this).siblings().slideToggle();
  //   $(this).parent().siblings().find('.dropdown-item').slideUp();
  // });
});