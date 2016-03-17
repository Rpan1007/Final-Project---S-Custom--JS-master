$(document).ready(function() {
	console.log( "ready!" );
});

$('.more').click(function() {
  $(this).next('.hide').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();

});

$('#submit').click( function() { 
	alert('Thank you so much for contacting us!'); 
});


$('.js-click').on('click', function(){
	$('#light').css('display', 'block');
	$('#fade').css('display', 'block');
});

$('.js-close').on('click', function(){
	$('#light').css('display', 'none');
	$('#fade').css('display', 'none');	
});