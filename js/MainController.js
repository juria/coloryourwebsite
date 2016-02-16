(function (app, document) {
	'use strict';

	/**
	 * @class MainController
	 */
	app.controller('MainController', ['$scope', function ($scope) {

		$scope.settingsVisible = true;

		$scope.headerFontColor = "FFF";
		$scope.headerFontColorRed = 255;
		$scope.headerBackgroundColor = "554DD8";
		// $scope.headerBorder = "none";

		$scope.contentFontColor = "FFF";
		$scope.contentBackgroundColor = "2219B2";

		

		$scope.adjustCSS = function(selector, property, value) {
			console.log("Set " + property + " of " + selector + " to " + value);
			$(selector).css(property, value);
		};
		
	}]);

}(this.app, this.document));
