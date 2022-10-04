$(document).ready(function() {
	// предварительные настройки блоков с анимациями.
	$('.seting_one').css('animation-name', 'none');
	$('.seting_two').css('animation-name', 'none');
	$('.seting_three').css('animation-name', 'none');
	$('.seting_one').css('opacity', '0');
	$('.seting_two').css('opacity', '0'); 
	$('.seting_three').css('opacity', '0');
	$('.line_one').css('max-width', '10%');
	$('.line_one').css('opacity', '0');
	$('.line_two').css('max-width', '10%');
	$('.line_two').css('opacity', '0');
	animation();

	$(window).resize(function() {
		animation();
	});
	// запуск анимаций.
	$(window).scroll(function() {
		animation();
		// специальное условие разработанное Матвеем Андреевичем, чтобы не для экономии строк.
		// занесение блока "body" в переменную, для дельнейшего использования.
	});
	function animation() {
		if (window.outerWidth <= window.innerWidth) {
			var width = window.outerWidth;
		}
		else {
			var width = window.innerWidth;
		}
		var counter = window.pageYOffset + window.innerHeight;
		// первая строка для вычисление скрола активации анимации(первой), а вторая для ухода анимации.
		var HieghtActivetedAminationOneIn = width * 0.7380208333333333;
		var HieghtActivetedAminationOneOut = width * 0.6338541666666667;
		// первая строка для вычисление скрола активации анимации(второй), а вторая для ухода анимации.
		var HieghtActivetedAminationTwoIn = width * 1.0046875;
		var HieghtActivetedAminationTwoOut = width * 0.7380208333333333;
		// первая строка для вычисление скрола активации анимации(третей), а вторая для ухода анимации.
		var HieghtActivetedAminationThreeIn = width * 1.283333333333333;
		var HieghtActivetedAminationThreeOut = width * 1.0046875;
		// линия
		var HieghtActivetedAminationLineIn = width * 0.9557291666666667;
		var HieghtActivetedAminationLineOut = width * 0.7380208333333333;	
		// линия два
		var HieghtActivetedAminationLineTwoIn = width * 1.231770833333333;
		var HieghtActivetedAminationLineTwoOut = width * 1.0046875;
		// анимации.
	    animation_activeted();

	    function animation_activeted() {
	    	// анимация прихода первого блока. 
		    if (counter >= HieghtActivetedAminationOneIn) {
	    		$('.seting_one').css('animation-name', 'seting_one_in');
	    		$('.seting_one').css('opacity', '1');
	    	}
	    	// анимация ухода первого блока.
	    	else if (counter < HieghtActivetedAminationOneOut) {
	    		$('.seting_one').css('opacity', '0');
	    		$('.seting_one').css('animation-name', 'none');	
	    	}
	    	// анимация прихода второго блока.
	    	if (counter >= HieghtActivetedAminationTwoIn) {
	    		$('.seting_two').css('animation-name', 'seting_two_in');
	    		$('.seting_two').css('opacity', '1');
	    	}
	    	// анимация ухода второго блока.
	    	else if (counter < HieghtActivetedAminationTwoOut) {
	    		$('.seting_two').css('opacity', '0');
	    		$('.seting_two').css('animation-name', 'none');	
	    	}
	    	// анимация прихода третьего блока.
	    	if (counter >= HieghtActivetedAminationThreeIn) {
	    		$('.seting_three').css('animation-name', 'seting_one_in');
	    		$('.seting_three').css('opacity', '1');
	    	}
	    	// анимация ухода третьего блока.
	    	else if (counter < HieghtActivetedAminationThreeOut) {
	    		$('.seting_three').css('opacity', '0');
	    		$('.seting_three').css('animation-name', 'none');	
	    	}
	    	// анимация линии.
	    	if (counter >= HieghtActivetedAminationLineIn) {
	    		$('.line_one').css('animation-name', 'line_animation');
	    		$('.line_one').css('max-width', '88.13186813186813%');
	    		$('.line_one').css('opacity', '1');
	    	}
	    	// анимация ухода линии.
	    	else if (counter < HieghtActivetedAminationLineOut) {
	    		$('.line_one').css('max-width', '10%');
	    		$('.line_one').css('animation-name', 'none');
	    		$('.line_one').css('opacity', '0');	
	    	} 

	    	if (counter >= HieghtActivetedAminationLineTwoIn) {
	    		$('.line_two').css('animation-name', 'line_animation');
	    		$('.line_two').css('max-width', '88.13186813186813%');
	    		$('.line_two').css('opacity', '1');
	    	}
	    	// анимация ухода линии.
	    	else if (counter < HieghtActivetedAminationLineTwoOut) {
	    		$('.line_two').css('max-width', '10%');
	    		$('.line_two').css('animation-name', 'none');
	    		$('.line_two').css('opacity', '0');	
	    	}  	
	    }
	}
});