$(function(){
	$(window).scroll(function(){ 
		if($(window).scrollTop() >200){
			$(".header_menu .menu").css("background-color", "rgba(27, 83, 153, 0.65)");

		}
		if($(window).scrollTop() <200){
			$(".header_menu .menu").css("background-color", "rgba(0, 0, 0, 0)");

		}
		if($(window).scrollTop() >300){
			$("#back").css("display", "block");
			
		} 
		else{
			$("#back").css("display", "none");
		}
		
	});
	$("#back").on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 
		});
	});

	$('.counter').counterUp({
		delay: 3,
		time: 1000
	});

	$(".filter-button").click(function(){ 
		var value = $(this).attr('data-filter'); 
		if(value == "all"){
			$('.filter').show('1000');
		}       
		else        
		{            
			$(".filter").not('.'+value).hide('3000');           
			$('.filter').filter('.'+value).show('3000');                   
		}    
	});


	$(".sk_ill #sk1").click(function(){
		$(".skill .active").removeClass("active");
		$(this).parent().next().addClass("active");
	});
;
   $(".detail1 a").each(function(){
   	$(this).click(function(){
   	$(this).addClass("active");
   	$(".detail1 .active").removeClass("active");
   	$(this).parent().next().addClass("active");
   $(".detail1 .active .img").addClass("active");


   	});
   });






});

