var myApp = angular.module('myApp', ['ngResource','ngRoute']);

myApp.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/forecast', { 
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

// creating service
myApp.service('cityService', function(){
    this.city = 'Joinville, SC';
})

// homepage controller
myApp.controller('homeController', ['$scope', '$log','cityService', function($scope, $log, cityService) {
    $scope.city = cityService.city; 

    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

// forecast controller
myApp.controller('forecastController', ['$scope', '$log', 'cityService', function($scope, $log, cityService) {
    $scope.city = cityService.city;
}]);