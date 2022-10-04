$(document).ready(function() {

	adaptation();

	$(window).resize(function() {
		adaptation();	
	});

	function adaptation() {
		var browserZoomLevel = Math.round(window.devicePixelRatio * 100) / 100;

		$(':root').css('--max-width-one', (window.innerWidth * browserZoomLevel) + 'px');
		$(':root').css('--size-textarea', ($('.container').width() * 0.0260416666666667) + 'px');
		$(':root').css('--size-textarea-info', ($('.container').width() * 0.0595) + 'px');
		

		if (browserZoomLevel > 0.95) {
			$(':root').css('--min-width-one', (browserZoomLevel / 10) / 2 + 1);
			$(':root').css('--max-width-one', screen.width + 'px');
		}

		$(':root').css('--width-out', $('.container').width() + 'px');

		$('.container').height($('.container').width() * 1.29125);
		$('.footer_block').height($('.footer_block').width() * 0.19125);
	}
});