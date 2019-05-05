$('#down').click(function() {
  var menuHeight = $('.menu').height();
  $('html, body').animate({
      scrollTop: $('#essay').offset().top - menuHeight
  }, 750);
});
$('#bottom').click(function(){
  $('html, body').animate({ scrollTop: $('footer').offset().top }, 750);
});
$('.down').click(function() {
  var menuHeight = $('.menu').height();
  var parent = $(this).parent().attr('id');
        var parentId = '#'+parent;
        var scrollTo = $(parentId).next().attr('id');
        var scrollToId = '#'+scrollTo;
        $('html, body').animate({
            scrollTop: $(scrollToId).offset().top - menuHeight
        }, 750);
});


$('.up').click(function() {
 $('html, body').animate({scrollTop:0}, 1500);
})
$(window).scroll(function() {
 if($(this).scrollTop() > 40 ) {
   $('.menu').fadeIn(500);
 } else {
   $('.menu').fadeOut(500);
 };
});
