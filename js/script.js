$(function(){

	$( document ).ready(function() {
    
    	$('form').submit(function( event ) {
  		alert('Заявка отправлена!');
		});
	});
});

 function slowScroll(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 2000);
}			