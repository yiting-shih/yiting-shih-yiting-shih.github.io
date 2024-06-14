$(document).ready(function () {
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

  // fadein out
  $("#n").click(function () {
    $(".list_item_m,.list_item_s").fadeOut("fast");
    $(".list_item_n").fadeIn("slow");
  });
  $("#m").click(function () {
    $(".list_item_n,.list_item_s").fadeOut("fast");
    $(".list_item_m").fadeIn("slow");
  });
  $("#s").click(function () {
    $(".list_item_n,.list_item_m").fadeOut("fast");
    $(".list_item_s").fadeIn("slow");
  });

  // $("#n").click(function () {
  //   $(".list_item_m,.list_item_s").fadeOut("fast");
  //   $(".list_item_n").fadeToggle("1000");
  // });
  // $("#m").click(function () {
  //   $(".list_item_n,.list_item_s").fadeOut("fast");
  //   $(".list_item_m").fadeToggle("1000");
  // });
  // $("#s").click(function () {
  //   $(".list_item_n,.list_item_m").fadeOut("fast");
  //   $(".list_item_s").fadeToggle("1000");
  // });
});
// new
const openBtn = document.querySelector('#map_n');
const otherBtns = document.querySelectorAll('#map_m,#map_s,#map_n1,#map_n2');
const closeBtn = document.querySelector('.back1');
const offcanvasMap = document.querySelector('.offcanvas-map')

openBtn.addEventListener('click', function (e) {
  offcanvasMap.classList.add('active');
});

closeBtn.addEventListener('click', function (e) {
  offcanvasMap.classList.remove('active');
  setTimeout(function () {
    history.go(store.html);
  }, 400);
});
otherBtns.forEach(function (btn) {
  btn.addEventListener('click', toggleOffcanvasMap);
});

function toggleOffcanvasMap(e) {
  offcanvasMap.classList.toggle('active');
}
