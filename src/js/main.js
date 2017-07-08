jQuery(document).ready(function(jQuery) {

	var myWidth = 0;
        myWidth = window.innerWidth;
        jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
        jQuery(window).resize(function(){
            var myWidth = 0;
            myWidth = window.innerWidth;
            jQuery('#size').remove();
            jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
        });

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

});