"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
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
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

		/**
    * @description
   */
		// WebFont.load({
		//   google: {
		//     families: [
		//       'Roboto:100,300,400,500,700,900'
		//     ]
		//   }
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
 * @description Document DOM ready.
 */
(function () {
		/*
  * =============================================
  * CALLBACK :: start
  * ============================================= */
		var initCustomScroll = function initCustomScroll() {
				// result__box-scroll
				var container = document.getElementsByClassName('result__box-scroll')[0];
				var ps = new PerfectScrollbar(container);
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

				// callback
				// ==========================================
				initCustomScroll();
		};
		initNative();
})();