$(document).ready(function() {

  $('.menu ul li').click(function() {
    $('html, body').animate({ scrollTop: $(window).height()} );
  });

   $('.back-to-top').click(function() {
     $('html, body').animate({scrollTop:0}, 750);
   })
   $(window).scroll(function() {
     if($(this).scrollTop() > 0 ) {
       $('.back-to-top').fadeIn(500);
     } else {
       $('.back-to-top').fadeOut(500);
     };
   });


   $('.works-cited ul').fadeOut(0);
   $('.works-cited').click(function() {
     $('.works-cited ul').fadeToggle(500);
   });

});
