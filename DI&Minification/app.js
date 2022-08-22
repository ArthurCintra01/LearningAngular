var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {
    $log.info($scope);
});

// function that works with minification
myApp.controller('mainController', ['$scope','$log', function ($scope,$log) {
    $log.info($scope);
}]);

//Minified version
myApp.controller("mainController",["$scope","$log",function(a,b){b.info(a)}])