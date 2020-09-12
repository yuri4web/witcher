$(function(){
	
	var $btnTop = $('.footer_top-btn');
	$(window).on('scroll', function(){
		if($(window).scrollTop() >= 20){
			$btnTop.fadeIn();
		}else{
			$btnTop.fadeOut();
		}
	});
	
	$btnTop.on('click', function(){
		$('html,body').animate({scrollTop:0},900)
	});
	
	var $menuTrigger = $('.mobile-menu_trigger');
	var $menuClose = $('.header_menu-close');
	$menuTrigger.on('click', function(){
		$('.header_menu').addClass('active');
	});
	$menuClose.on('click', function(){
		$('.header_menu').removeClass('active');
	});
	
});

function slowScroll(id){
	var offset = 0;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
}

new WOW().init();