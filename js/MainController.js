(function (app, document) {
	'use strict';

	/**
	 * @class MainController
	 */
	app.controller('MainController', ['$scope', function ($scope) {

		$scope.settingsVisible = true;

		$scope.headerFontColor = "000000";
		$scope.headerBackgroundColor = "FFFFFF";
		$scope.contentFontColor = "000000";
		$scope.contentBackgroundColor = "FFFFFF";

		$scope.dye = function(selector, property, value) {
			console.log("Set " + property + " of " + selector + " to " + value);
			$(selector).css(property, "#" + value);
		};


	}]);

}(this.app, this.document));
