/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const initCustomScroll = () => {
		// result__box-scroll
		const container = document.getElementsByClassName('result__box-scroll')[0];
		const ps = new PerfectScrollbar(container);
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

		// callback
		// ==========================================
		initCustomScroll();
	};
	initNative();
})();
