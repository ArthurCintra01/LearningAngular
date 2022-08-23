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
myApp.controller('homeController', ['$scope','cityService', function($scope, cityService) {
    $scope.city = cityService.city; 

    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

// forecast controller
myApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService) {
    $scope.city = cityService.city;

    $scope.weatherAPI = $resource("http://api.weatherapi.com/v1/forecast.json?key=b403b91067474db092e7868468bcbc1a", { callback: "JSON_CALLBACK" },+'&'+ { get: { method: "JSONP" }});

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city});

    console.log($scope.weatherResult);
}]);