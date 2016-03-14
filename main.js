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
