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

   $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("nav, #languageSelector").addClass("scrolledlogo");
        } else {
            $("nav, #languageSelector").removeClass("scrolledlogo");
        }
   });
});

//IN PAGE SCROLL - ACTIVE LINKS
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('nav ul li a.dataclose').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('nav ul li a.dataclose').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
         },
         1000, function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav ul li a.dataclose').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 70 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a.dataclose').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
