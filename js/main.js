var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
		breakpoints:{
			550: {
				slidesPerView: 2
			}
		},
		navigation:{
			nextEl: '.button-next'
		}
});

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('menu-btn-active');
	menu.classList.toggle('header-active');
});