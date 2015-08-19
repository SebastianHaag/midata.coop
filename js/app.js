$(document).ready(function() {
   $(window).load(function() {
      $("#preload").fadeOut(300);
   });
   $('#nav-icon').click(function(){
      $('#nav-icon, #topBarContent').toggleClass('open');
      // $('html, body').toggleClass('noScroll');
      return false;
   });
   $('.dataclose').click(function(){
      $('#nav-icon, #topBarContent').removeClass('open');
      return false;
   });

   var $root = $('html, body');
      $('a').click(function() {
      var href = $.attr(this, 'href');
         $root.animate({
            scrollTop: $(href).offset().top
         }, 1000, function () {
            window.location.hash = href;
      });
      return false;
   });

   var swiper = new Swiper('.swiper-container', {
      speed: 600,
      pagination: '.swiper-pagination',
      paginationClickable: '.swiper-pagination',
      effect: 'fade',
      autoplay: 6000,
      loop: true,
      preloadImages: false,
      lazyLoading: true
   });

   document.addEventListener('touchmove', function(e) {
      if($('html.noScroll').length > 0){
         if (($('nav').has($(e.target)).length > 0)) {
            e.preventDefault();
         }
      }
   });
   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      var viewportmeta = document.querySelector('meta[name="viewport"]');
      if (viewportmeta) {
         viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
         document.body.addEventListener('gesturestart', function() {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.0';
         }, false);
      }
   }
   $(document).foundation({
   });
});
