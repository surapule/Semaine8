//Definie la taille des sections
$(document).ready(function () {
	jQuery('document').ready(function () {
		//On definie notre variable min_height à la hauteur de notre fenetre
		var min_height = jQuery(window).height();
		//Si notre section est inferieur à min_height alors on lui donne comme propriété css une hauteur minimal egal à min_height
		if (jQuery('section').height() < min_height) {
			jQuery('section').css({
				'min-height': +min_height + 'px'
			});
		}
	});
});