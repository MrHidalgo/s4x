"use strict";

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	/**
  *
  */
	var initWebFontLoader = function initWebFontLoader() {

		/**
   * @description
   */
		// WebFont.load({
		// 	google: {
		// 		families: [
		// 			'Montserrat:300,400,500,600,700'
		// 		]
		// 	}
		// });

		/**
   * @description
   */
		var WebFontConfig = {
			custom: {
				families: ['Replica:n3,n4,n5']
			}
		};
	};

	/**
  *
  */
	var initPreventBehavior = function initPreventBehavior() {

		var link = document.querySelectorAll("a");

		link.forEach(function (val, idx) {

			val.addEventListener("click", function (e) {
				if (val.getAttribute("href") === "#") {
					e.preventDefault();
				}
			});
		});
	};

	/**
  * @name initSwiper
  *
  * @description initialize Swiper
  */
	var initSwiper = function initSwiper() {

		var mySwiperDescription = new Swiper('.swiper-container-description', {
			loop: true,
			watchOverflow: true,
			normalizeSlideIndex: true,
			grabCursor: true,
			freeMode: false,
			effect: 'slide',
			autoplay: {
				delay: 5000
			},
			speed: 750,
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		});
	};

	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initWebFontLoader();
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================
		initSwiper();

		// callback
		// ==========================================
	};
	initNative();
})();