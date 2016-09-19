$(document).foundation();

//AOS init
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    disable: 'mobile'
});


//smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });

});


//top-bar disappears on scroll
$(window).scroll({previousTop: 0}, 
    function () {
    // get current distance from top of viewport
    var currentTop = $(window).scrollTop();
    // define the header height here
    var headerHeight = 100;
    // if user has scrolled past header, initiate the scroll up/scroll down hide show effect
    if( $(window).scrollTop() > headerHeight ) {
        if (currentTop < this.previousTop) {
          $(".main-nav").removeClass("hide");
          $(".main-nav").addClass("show");
        } else {
           $(".main-nav").removeClass("show");
           $(".main-nav").addClass("hide");
        }
      }
    this.previousTop = currentTop;
});
