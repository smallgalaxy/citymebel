$(document).ready(function() {
	forma_check();

	function forma_check() {
		$('#contact').mask('9-(999)-999-99-99');

		function check_name_sity(names) {
			$(names).on('input', function(ev) {
				var name = form.name.value;
				var city = form.city.value; 
				let count = 0;

				function forr(e, count) {
					for (let i = 0; i < e.length; i++) {
						if (e[i] == ' ') {
							count = count + 1;
						}
					}
					return count;
				}

				if (names == '.name') {
					count = forr(name, count);
					var a = name;
				}
				else {
					count = forr(city, count);
					var a = city;
				}

				if(count == a.length) {
					$(names).css('border-color', 'red');
				}
				else {
					$(names).css('border-color', '#92c37c');
				}			
			});
		}

		check_name_sity('.name');
		check_name_sity('.city');

		$('.contact').keyup(function() {
			var val = $('.contact').val().split('_').length;
		  	if (val != 1) {
				$('.contact').css('border-color', 'red');
		  	}
		  	else {
		  		$('.contact').css('border-color', '#92c37c');
		  	}
		});	

		$('.on_off').on('input', function(ev) {
	  		if($(".on_off").prop("checked") == true) {
				$('.form__error').css('opacity', '0');
			}
			else {
				$('.form__error').css('opacity', '1');
			}	
		});
	}

	document.getElementById('form').addEventListener('submit', function(e){
		e.preventDefault();
		fail = false;
		var name = form.name.value;
		var contact = form.contact.value;
		var city = form.city.value;
		var re = /^[\d]{1}-\([\d]{2,3}\)-[\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
		var yes = re.test(contact);

		let count = 0;
		for (let i = 0; i < name.length; i++) {
			if (name[i] == ' ') {
				count = count + 1;
			}
		}

		count = 0;
		for (let i = 0; i < city.length; i++) {
			if (city[i] == ' ') {
				count = count + 1;
			}
		}

		if(count == name.length) {
			$('.name').css('border-color', 'red');
			fail = true;
		}

		if (contact.split('-').length != 5) {
			$('.contact').css('border-color', 'red');
			fail = true;
	  	}

		if(count == city.length) {
			$('.city').css('border-color', 'red');
			fail = true;
		}

		if($("#on_off").prop("checked") != true) {
	        $('.form__error').css('display', 'block');
	        fail = true;
	    }

	    if(fail == false) {
    		var http = new XMLHttpRequest(), f = this;
          	var th = $(this);
          
	    	$(this).find('input[type=submit], button[type=submit]').prop('disabled', true);

    		http.open("POST", "js/send.php", true);
    		http.onreadystatechange = function() {
			    if (http.readyState == 4 && http.status == 200) {
			        console.log(http.responseText);
			    }
		    }
		    http.send(new FormData(f));
          	th.trigger("reset");

			swal("Заявка отправлена!", "кликни на кнопку!", "success");

          	$(this).find('input[type=submit], button[type=submit]').prop('disabled', false);
		}
	});	
});