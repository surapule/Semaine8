//mouvement fluide
$(function () {
	// au click sur chaque lien nous ferons appelle a la fonction animate de Jquery
		$('nav a').on('click', function (e) {
			e.preventDefault();
			// hash permet de cibler le href de nos liens
			var hash = this.target;
			$('html, body').stop().animate({
				scrollTop: $(this.hash).offset().top - 50
			}, 1000, function () {
				window.location.hash = target;
	        }); 
		});
	});