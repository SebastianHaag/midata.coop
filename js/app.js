$(document).ready(function() {
   $(window).load(function() {
      $("#preload").fadeOut(600);
   });
   $('#nav-icon').click(function(){
      $('#nav-icon, #topBarContent').toggleClass('open');
      // $('html, body').toggleClass('noScroll');
      return false;
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
      reveal: {
         animation: 'fade',
      }
   });
});
