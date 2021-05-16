
$(window).scroll(function() {

  if ($(this).scrollTop() > 100) {
    $(".navbar").css({
      "background": "#17a2b8"
    })
  } else {
    $(".navbar").css({
      "background": "transparent"
    })
  }

})

//Inicializar tooltips
$('[data-toggle="tooltip"]').tooltip()


$('.sticky-button-top').click(function(event) {
  event.preventDefault();
  
  $('html, body').animate({scrollTop: 0}, 500);
 
})
