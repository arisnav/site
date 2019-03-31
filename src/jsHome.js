$(document).ready(function() {

  $('.menu ul li').click(function() {
    $('html, body').animate({ scrollTop: $(window).height()} );
  });

  $('.down').click(function(){
      $('html, body').animate({ scrollTop: $(window).height() }, 750);
      $(this).fadeOut(500);
   });
   $(window).scroll(function() {
     if($(this).scrollTop() < 40 ) {
       $('.down').fadeIn(500);
     } else {
       $('.down').fadeOut(500);
     };
   });

   $('.back-to-top').click(function() {
     $('html, body').animate({scrollTop:0}, 750);
   })
   $(window).scroll(function() {
     if($(this).scrollTop() > 40 ) {
       $('.back-to-top').fadeIn(500);
       $('.menu').fadeIn(500);
     } else {
       $('.back-to-top').fadeOut(500);
       $('.menu').fadeOut(500);
     };
   });


   $('.works-cited ul').fadeOut(0);
   $('.works-cited').click(function() {
     $('.works-cited ul').fadeToggle(500);
   });

});
