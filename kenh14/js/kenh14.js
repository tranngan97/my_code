$(function(){
	$(".body .collap").hide();
$(".header_menu button").click(function(){
	$(this).text("X");
	$(".body .collap").toggle();
});

$(window).scroll(function(){ 
	if($(window).scrollTop() >400){
		$("#back").css("display", "block");
		
	} 
		else{
			$("#back").css("display", "none");
		}

})
$("#back").on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 
		});
	});
});