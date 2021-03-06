/*

  Author: creativeCary
  Template: Flat-Vault
  Version: 1.2
  URL: http://themeforest.net/user/creativecary


*/

$(document).ready(function() { // Document ready
	"use strict";

    $(".basic_features").click(function () {
        $(".basic_features_code").hide();
        var classBasicFeatures = $(this).attr("class");
        var visibility = classBasicFeatures.split(" ");
        console.log(visibility);
        $(".code_" + visibility[1]).fadeIn("slow");
    });

    $(".data_storage").click(function () {
        $(".data_storage_code").hide();
        var classFeatures = $(this).attr("class");
        var visibility = classFeatures.split(" ");
        console.log(visibility);
        $(".code_" + visibility[1]).fadeIn("slow");
    });

    $(".views_front_end").click(function () {
        $(".views_front_end_code").hide();
        var classFeatures = $(this).attr("class");
        var visibility = classFeatures.split(" ");
        console.log(visibility);
        $(".code_" + visibility[1]).fadeIn("slow");
    });

    $(".more_components").click(function () {
        $(".more_components_code").hide();
        var classFeatures = $(this).attr("class");
        var visibility = classFeatures.split(" ");
        console.log(visibility);
        $(".code_" + visibility[1]).fadeIn("slow");
    });

    hljs.initHighlightingOnLoad();

    /* ==========================
	   PRE-LOADER
	=============================*/

	$(window).load(function() {
		// will fade loading animation
		$("#object").delay(600).fadeOut(300);
		// will fade loading background
		$("#loading").delay(1000).fadeOut(500);
	})


	/* =====================================
	   AJAX CHIMP ( NEWSLETTER SUBSCRIPTION )
	========================================*/
	$('#mc-embedded-subscribe-form').ajaxChimp({
		callback: mailchimpCallback,
	    url: 'http://craftxhtml.us11.list-manage.com/subscribe/post?u=cfe258a0cf370d5efaa793bc7&amp;id=fa81ce5caf'
	    // Replace the URL above with your mailchimp URL (put your URL inside '').
	});

	// callback function when the form submitted, show the notification box
	function mailchimpCallback(resp) {
        if (resp.result === 'success') {
			$('#newsletter-error').slideUp();
            $('#newsletter-success').slideDown();
        }
        else if (resp.result === 'error') {
			$('#newsletter-success').slideUp();
            $('#newsletter-error').slideDown();
        }
    }

}); // End document ready
