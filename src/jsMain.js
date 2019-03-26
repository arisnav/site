$('.down').click(function(){
    $("html, body").animate({ scrollTop: $(window).height()}, 300);
    return false;
 });


$(document).ready(function() {
  $('.back-to-top').click(function(e){
    $('html, body').animate({scrollTop:0}, '1000');
    e.preventDefault();
  });
  $(window).scroll(function() {
    if($(this).scrollTop() > 300){
      $('.back-to-top').fadeIn('2000');
    } else {
      $('.back-to-top').fadeOut('500');
    }
  });
});
