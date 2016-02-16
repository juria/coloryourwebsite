(function (app, document) {
	'use strict';

	/**
	 * @class MainController
	 */
	app.controller('MainController', ['$scope', function ($scope) {

		$scope.color = "FF0000";

		$scope.dye = function(selector, property, value) {
			console.log("Set " + property + " of " + selector + " to " + value);
			$(selector).css(property, "#" + value);
		};


	}]);

}(this.app, this.document));
