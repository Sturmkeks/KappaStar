(function ($) {

	"use strict";

	function KappaStar() {

		var init = function(parentElement) {
	        var buttonWrapper = parentElement.find('.button-wrapper'),
                kappaWrapper = parentElement.find('.kappa-wrapper'),
                shootingStarsAudio = new Audio("audio/shooting_stars.mp3");

            buttonWrapper.addClass('hidden');
            shootingStarsAudio.play();
            kappaWrapper.addClass('flashing');
            console.log('flashing');
            setTimeout(function() {
                kappaWrapper.addClass('spinning');
                console.log('spinning');
                setTimeout(function() {
                    kappaWrapper.toggleClass('sizing');
                    console.log('sizing');
                    setTimeout(function() {
                        kappaWrapper.removeClass('sizing');
                        kappaWrapper.addClass('blur');
                        console.log('blur');
                        setTimeout(function() {
                            $(shootingStarsAudio).animate({volume: 0}, 1000);
                            kappaWrapper.addClass('hidden');
                            console.log('end');
                        }, 18000);
                    }, 46200);
                }, 30700);
            }, 23200);
		};

		this.init = function(element) {
			var parentElement = (element) ? element : $("body");
			init(parentElement);
		};
	}

	window.KappaStar = new KappaStar();

})(jQuery);
