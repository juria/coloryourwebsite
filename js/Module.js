(function (window, angular) {

	'use strict';

	window.app = angular.module('ColorYourWebsite', ['ngRoute']).

	config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'MainController'
			});

			$routeProvider.otherwise({
				redirectTo: '/home'
			});
		}
	]);

})(this, this.angular);