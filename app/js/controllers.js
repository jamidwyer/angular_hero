define(['angular', 'services'], function (angular) {
	'use strict';
	return angular.module('myApp.controllers', ['myApp.services'])
		.controller('initCtrl', ['$scope', '$http', function($scope, $http) {
            $scope.podcasts = [];
            console.log($scope.podcasts);
            $http.post('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=[API KEY HERE]&tags=headphones&nojsoncallback=1&license=4%2C5%2C6&sort=interestingness-desc&per_page=1&format=json').success(function(data) {
                //TODO: abstract out bg image tag, title, page1 content, page2 content, footer items into text file and preload that
                $scope.heroImage = {
                    background: 'url(http://farm2.static.flickr.com/'+data.photos.photo[0].server+'/'+data.photos.photo[0].id+'_'+data.photos.photo[0].secret+'.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                };
            });
        }])
		.controller('MyCtrl1', ['$scope', 'version', '$http', '$location', function ($scope, version, $http, $location) {
			$scope.scopedAppVersion = version;
            $scope.submitForm = function() {
                $http.post('api/get_podcasts').success(function(data){
                    $location.path('/results');
                    var len = data.length;
                    var i = 0;
                    for (i=0; i<len; i++) {
                        $scope.podcasts.push(data[i]);
                    }
                });
            };
        }])
		.controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
            console.log($scope.podcasts);
		}]);
});