(function (window, angular) {

	'use strict';

	window.app = angular.module('ColorYourWebsite', ['ngRoute']).

	config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.when('/home', {
				templateUrl: 'views/home.html'
			});

			// $routeProvider.when('/text', {
			// 	templateUrl: 'views/text.html'
			// });

			$routeProvider.otherwise({
				redirectTo: '/home'
			});
		}
	]);

})(this, this.angular);