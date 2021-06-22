
$('.art').each(function() {
  $(this).mouseover(function() {
      $(this).addClass('active');
    $('.gallery').children('.art').not('.active').addClass('inactive');
  });
  $(this).mouseleave(function() {
      $(this).removeClass('active');
      $('.gallery').children('.art').not('.active').removeClass('inactive');
  });
});