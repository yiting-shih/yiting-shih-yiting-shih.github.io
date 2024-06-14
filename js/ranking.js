$(function () {
  // navBar
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

  // 滑動至指定區塊
  $('.upper a, .dropdown-item a').click(function () {
    let btn = $(this).attr('href');
    let pos = $(btn).offset();
    $('html, body').animate({ scrollTop: pos.top }, 1500);
  });


  // 讓側邊欄跟著卷軸移動
  $('.wrapper').scroll(function () {
    let scrollPos = $(window).scrollTop();
    $(".sidebar").css("top", scrollPos + "px");
  });

  // goTop按鈕
  $('html,body').append('<div id="fixedTop"></div>');
  let fixedTop = $('#fixedTop');
  fixedTop.on('click', function () {
    $('html,body').animate({ scrollTop: '0' }, 500);
  });

  // 當視窗變數載入時(網頁開啟時、捲動、調整大小時)，執行...
  $(window).on('load scroll resize', function () {
    let showTop = 800;
    let curScrollTop = $(window).scrollTop();
    if (curScrollTop > showTop) {
      fixedTop.fadeIn(200);
    } else {
      fixedTop.fadeOut(200);
    }
  });


});



const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  grabCursor: true,
  allowTouchMove: true,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: true,
  // },
  freeMode: {
    momentumBounce: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable :true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



lightbox.option({
  'resizeDuration': 500,
  'wrapAround': true
});

