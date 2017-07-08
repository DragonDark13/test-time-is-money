jQuery(document).ready(function(jQuery) {

	jQuery('.meni_list a').click(function(){
		var target = jQuery(this).attr('href');
		jQuery('html, body').animate({scrollTop: jQuery(target).offset().top}, 1000);
		return false;
	});

	jQuery(".plan .my_btn ").hover(function() {
		jQuery(this).closest('.plan').addClass('active');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		jQuery(this).closest('.plan').removeClass('active');
	});


	jQuery(".navbar-toggle").click(function(event) {
	/* Act on the event */

	    if (jQuery(this).hasClass('collapsed')) {

		    jQuery(".header").addClass('js_response_meni').next(".main_container").addClass('js_response_hide');
		    jQuery(this).removeClass('collapsed');
	    } 

	    else {

			jQuery(this).addClass('collapsed');
			jQuery(".header").removeClass('js_response_meni').next(".main_container").removeClass('js_response_hide');
	    }

	});

});