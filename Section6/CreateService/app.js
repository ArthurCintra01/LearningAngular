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

// creating service
myApp.service('nameService', function(){
    var self = this;
    this.name = 'Arthur Cintra';
    
    this.namelength = function(){
        return self.name.length;
    }
})

// main controller
myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    $scope.name = nameService.name; // using the service i created
    // function to watch when name changes and updates the scope
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });

    $log.log(nameService.name); 
    $log.log(nameService.namelength()); 
}]);

// second controller
myApp.controller('secondController', ['$scope', '$log', '$routeParams','nameService', function($scope, $log, $routeParams, nameService) {
    $scope.num = $routeParams.num || 1; // setting the scope var num as the value of the parameter num from the url
    $scope.name = nameService.name;
    // function to watch when name changes and updates the scope
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
}]);