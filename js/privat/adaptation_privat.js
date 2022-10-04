$(document).ready(function() {
	adaptation();

	$(window).resize(function() {
		adaptation();
	});

	function adaptation() {
		var browserZoomLevel = Math.round(window.devicePixelRatio * 100) / 100;

		$(':root').css('--max-width-one', (window.innerWidth * browserZoomLevel) + 'px');
		$(':root').css('--width-out', $('.container').width() + 'px');

		if (window.outerWidth > window.innerWidth) {
			$(':root').css('--width-out', 100 + 'vw');
		}
		$('.footer_block').height($('.footer_block').width() * 0.1041666666666667);
	}
});