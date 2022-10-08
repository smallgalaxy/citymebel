$(document).ready(function () {
	adaptation();

	$(window).resize(function () {
		adaptation();
	});

	function adaptation() {
		var browserZoomLevel = Math.round(window.devicePixelRatio * 100) / 100;

		$(':root').css('--width-adaptation', (window.innerWidth * browserZoomLevel) + 'px');

		if (browserZoomLevel > 0.95) {
			$(':root').css('--min-width-one', (browserZoomLevel / 10) / 2 + 1);
			$(':root').css('--width-adaptation', screen.width + 'px');
		}

		$(':root').css('--width-out', $('.container').width() / 1920);

		$('.container').height($('.container').width() * 0.5885416666666667);
		$('.content').height($('.content').width() * 1.072395833333333);
		$('.container_two').height($('.container_two').width() * 0.488125);
		$('.footer_block').height($('.footer_block').width() * 0.19125);


		/*
		/*		console.log(document.querySelector('.header').offsetWidth, screen.availWidth, window.innerWidth, window.outerWidth);
		if (d.indexOf(c) == -1) {
			for (var i = 0; i < d.length; i++) {
				if (Number(d[i]) > Number(c)) {
					$(':root').css('--max-width-one', window.innerWidth * Number(d[i]) + 'px');
					$(':root').css('--width-out', window.innerWidth * Number(d[i]) + 'px');
					break;
				}
			}
		}

		if (window.matchMedia(a).matches && window.matchMedia(b).matches) {
			$(':root').css('--max-width-one', screen.width + 'px');
			$(':root').css('--width-out', screen.width + 'px');
		}
		/*console.log(window.outerWidth, window.innerWidth);
		element = $('.logo_text');
		color = element.css('font-size');
		console.log(color);
		elemen = $(':root');
		col = elemen.css('--width-out');
		console.log(col);
		console.log($('.contacts_text').css('font-size'));
		console.log(1 + 28 * (((window.outerWidth / window.innerWidth) * 100 / 1920) / 2));*/
	}
});
