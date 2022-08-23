var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){
    $scope.name = 'Arthur Cintra';
    console.log($scope);
});