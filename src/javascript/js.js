$(document).ready(function() {

   $('.up').click(function() {
     $('html, body').animate({scrollTop:0}, 750);
   })
   $(window).scroll(function() {
     if($(this).scrollTop() > 0 ) {
       $('.up').fadeIn(500);
     } else {
       $('.up').fadeOut(500);
     };
   });

   $('#up-down').click(function() {
    $('html, body').animate({scrollTop:0}, 750);
   })

});
