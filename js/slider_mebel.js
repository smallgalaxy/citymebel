$(document).ready(function() {
	$('.slider').slick({
		arrows:false,
		slidesToshow:1,
		slidesToScroll:1,
		speed: 1500,
		easing: 'ease',
		autoplay:true,
		autoplaySpeed: 2000,
		pauseOnFocus:false,
		pauseOnHover:false,
		PauseOnDotHover:false,
		draggable:false,
		swipe:false,
	});
});