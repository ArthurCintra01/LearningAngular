var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.name = 'Arthur';

    $timeout(function(){
        // change value of name after 3s
        $scope.name = 'Everybody';
    }, 3000);

}]);
