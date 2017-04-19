function main (){
  $('.table').fadeIn(1000);

    $('.vote').hide();
  $('.vote-button').on('click', function() {
    $('.vote').slideToggle();
$(this).toggleClass('table');
  });

$(this).text('NOW GATSBY IS YOUR RULER');

}


