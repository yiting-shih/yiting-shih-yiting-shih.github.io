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
  $('.menuL, .back').click(function () {
    $('.menuL, .back, .slide-menuM').toggleClass('active');
  });

  // 指定卷軸到指定高度再執行淡入淡出效果
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (innerWidth > 769) {
      $('#lowerPart .slogan').stop().toggleClass('active', scrollTop > 600, 80);
    } else if (innerWidth > 576 && innerWidth <= 768) {
      $('#bird_path').stop().toggleClass('animate__wobble', scrollTop > 200, 80);
      $('#lowerPart .slogan').stop().toggleClass('active', scrollTop > 800, 80);
    } else {
      $('#bird_path').stop().toggleClass('animate__wobble', scrollTop > 100, 80);
      $('#lowerPart .slogan').stop().toggleClass('active', scrollTop > 400, 80);
    }
  });


});