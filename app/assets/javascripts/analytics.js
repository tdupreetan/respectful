jQuery(function($){
  $('.quote-req').on('click', function(event){
    ga('send', 'event', 'quote-request', 'click', $(this).data('ga-label'));
  });
  $('#quote-submit').on('click', function(event){
    event.preventDefault();
    ga('send', 'event', 'quote-submit', 'click', $(this).data('ga-label'));
    $(this).submit();
  });
  $('.call-button').on('click', function(event){
    ga('send', 'event', 'call-button', 'click', $(this).data('ga-label'));

  });
});
