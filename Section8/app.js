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
myApp.controller('homeController', ['$scope','cityService', '$location', function($scope, cityService,$location) {
    $scope.city = cityService.city; 

    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    $scope.submit = function(){
        $location.path("/forecast");
    }
}]);

// forecast controller
myApp.controller('forecastController', ['$scope', '$resource', 'cityService','$http', function($scope, $resource, cityService,$http) {
    $scope.city = cityService.city;
    // api not working
    // var URL = 'http://api.openweathermap.org/data/2.5/weather?';
  
    // var request = {
    //     method: 'GET',
    //     url: URL,
    //     params: {
    //         q: $scope.city,
    //         mode: 'json',
    //         units: 'metric',
    //         cnt: '7',
    //         appid: '9ad487b9ac421b539ebb3e0aa76845ee'
    //     }
    // };
    // $scope.weatherAPI = $http(request);

    // // $scope.weatherAPI = $resource("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e816dd74aec237843db49bcaea4fc0bf", { callback: "JSON_CALLBACK" },+'&'+ { get: { method: "JSONP" }});

    // //$scope.weatherResult = $scope.weatherAPI.get();

    // console.log($scope.weatherResult);
}]);