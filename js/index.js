
// init controller
var controller = new ScrollMagic.Controller();



$(function () {
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 1000,
        triggerHook: 0
    })
        .setPin("#pin3")
        .setTween("#animate1", 0.5, { backgroundColor: "green", scale: 2.5 }) // trigger a TweenMax.to tween
        .addIndicators({ name: "1 (duration:1000)" })
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 150,
        triggerHook: 0
    })
        .setPin("#pin2")
        .addIndicators({ name: "1 (duration:1000)" })
        .addTo(controller);
});


(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();




	var contentWayPoint = function () {
		var i = 0;
		$('.sgp-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('sgp-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .sgp-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn sgp-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft sgp-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight sgp-animated');
							} else {
								el.addClass('fadeInUp sgp-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();


})(jQuery);

