var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', { // second page without parameter
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', { // adding a parameter "num" to the url
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

// main controller
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $scope.name = 'main';
}]);

// second controller
myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    $scope.name = 'second';
    $scope.num = $routeParams.num || 1; // setting the scope var num as the value of the parameter num from the url
}]);