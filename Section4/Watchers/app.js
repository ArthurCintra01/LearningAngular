var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }

    // this function runs when handle changes because handle is on the "watchlist"
    $scope.$watch('handle', function(newValue, oldValue){
        console.info('changed!');
        console.log('Old: ' + oldValue);
        console.log('New: ' + newValue);
    });
    
    setTimeout(function(){
        // telling angular to apply what i do to the angular js context
        // if you don't do this it changes the scope variable but it doesn't change the DOM
        $scope.$apply(function(){
            $scope.handle = 'newtwitterhandle';
            console.log('Scope changed!');
        })
        // you need to call this apply function when you call diferent functions and external libraries
    }, 3000);

    // if we use the angular timeout service we don't need to call the apply function
    // makes the same thing as setTimeout
    $timeout(function(){
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
    }, 3000);

}]);
