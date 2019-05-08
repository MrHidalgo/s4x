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
	const initWebFontLoader = () => {

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
		const WebFontConfig = {
			custom: {
				families: [
					'Replica:n3,n4,n5'
				]
			}
		};
	};

	/**
	 *
	 */
	const initPreventBehavior = () => {

		const link = document.querySelectorAll("a");

		link.forEach((val, idx) => {

			val.addEventListener("click", (e) => {
				if(val.getAttribute("href") === "#") {
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
	const initSwiper = () => {

		const mySwiperDescription = new Swiper('.swiper-container-description', {
			loop: true,
			watchOverflow: true,
			normalizeSlideIndex: true,
			grabCursor: true,
			freeMode: false,
			effect: 'slide',
			autoplay: {
			  delay: 5000,
			},
			speed: 750,
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
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
	const initNative = () => {
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
