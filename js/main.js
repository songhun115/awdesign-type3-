$(document).ready(function () {
  function bindHeaderMenu() {
    $('#header').off('mouseenter mouseleave');
    $('#header .sub-menu').stop(true, true).slideUp(0);
    $('#header').removeClass('active');

    if ($(window).width() >= 1240) {
      $('#header').hover(
        function () {
          $('#header .sub-menu').stop(true, true).slideDown(200);
          $('#header').addClass('active');
        },
        function () {
          $('#header .sub-menu').stop(true, true).slideUp(200);
          $('#header').removeClass('active');
        }
      );
    }
  }

  bindHeaderMenu();

  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(bindHeaderMenu, 200);
  });
  $('.m-menu').click(function(){
    
    $(this).toggleClass('active');
    $('.m-nav').toggleClass('active');
  })
  $('.m-nav .box > ul > li ul').slideUp()
   $('.m-nav .box > ul > li').on('click', function (e) {

    const $current = $(this).children('.sub-menu');           
    const $all     = $('.m-nav .box > ul > li > .sub-menu');  

    if ($current.is(':visible')) {
      $current.stop(true, true).slideUp(200);
      $(this).removeClass('open');
    } else {
      $all.not($current).stop(true, true).slideUp(200).parent().removeClass('open');
      $current.stop(true, true).slideDown(200);
      $(this).addClass('open');
    }
  });

  $('.m-nav .box > ul > li > .sub-menu').on('click', function (e) {
    e.stopPropagation();
  });


 const $buttons = $('.page-navi .box > div');          
  const $sections = $('#section1, #section2, #section3, #section4');

  $buttons.on('click', function () {
    const targetSel = $(this).data('target');
    const $target = $(targetSel);
    if ($target.length) {
      $('html, body').animate({ scrollTop: $target.offset().top }, 300);
    }
  });

  function onScrollSpy() {
    const scrollTop = $(window).scrollTop();
    const winH = $(window).height();
    const mid = scrollTop + winH / 2;

    let activeIndex = 0;
    $sections.each(function (i) {
      const top = $(this).offset().top;
      const bottom = top + $(this).outerHeight();
      if (mid >= top && mid < bottom) {
        activeIndex = i;
        return false; 
      }
    });

    $buttons.removeClass('active').eq(activeIndex).addClass('active');
const section3Top = $('#section3').offset().top;
const section3Bottom = section3Top + $('#section3').outerHeight();
if (mid >= section3Top && mid < section3Bottom) {
  $('.page-navi').addClass('light');  
} else {
  $('.page-navi').removeClass('light'); 
}
    
  }

  let t;
  $(window).on('scroll', function () {
    clearTimeout(t);
    t = setTimeout(onScrollSpy, 10);
  });

  onScrollSpy();


   $('.room-info .room-list ul li').hover(function() {
    const index = $(this).index(); 

    $('.thumbnails .img').removeClass('active').eq(index).addClass('active');
  }, function() {
  });

  $('.gnb-top').click(function(){
    $("html, body").animate({scrollTop : 0}, 500);
  })


  $(function(){
  const $buttons  = $('.sub-navi .box > div');
  
  $buttons.on('click', function(){
    const target = $(this).data('target');
    const $target = $(target);
    if($target.length){
      $('html, body').animate({ scrollTop: $target.offset().top }, 500);
    }
  });

  $(window).on('scroll', function(){
    const scrollTop = $(window).scrollTop();
    const winH = $(window).height();
    const mid = scrollTop + winH / 2;

    let isLight = false;

    $buttons.each(function(i){
      const target = $(this).data('target');
      const $target = $(target);
      if($target.length){
        const top = $target.offset().top;
        const bottom = top + $target.outerHeight();
        if(mid >= top && mid < bottom){
          $buttons.removeClass('active');
          $(this).addClass('active');

          if($target.hasClass('dark-section')){
            isLight = true;
          }
        }
      }
    });

    if(isLight) $('.sub-navi').addClass('light');
    else $('.sub-navi').removeClass('light');
  });

  $(window).trigger('scroll'); 
});


});