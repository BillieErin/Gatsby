function main (){
  $('.table').fadeIn(1000);

    $('.vote').hide();
  $('.vote-button').on('click', function() {
    $('.vote').toggle();
$(this).toggleClass('table');
  });
}

