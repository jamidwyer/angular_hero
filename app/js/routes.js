define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/partials/partial1.html',
			controller: 'MyCtrl1'
		});
		$routeProvider.when('/results', {
			templateUrl: 'app/partials/partial2.html',
			controller: 'MyCtrl2'
		});
		$routeProvider.otherwise({redirectTo: '/'});
	}]);

});