var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    // get info from api
    // i dont have acess to the api so it doesn't work
    // $http.get('/api')
    //     .sucess(function(result){
    //         $scope.rules = result;
    //     })
    //     .error(function (data, status){
    //         console.log(data);
    //     });

    $scope.newRule = '';
    // won't work because the api doesn't exist
    // $scope.addRule = function() {
    //     $http.post('/api', { newRule: $scope.newRule})
    //         .sucess(function(result){
    //             $scope.rules = result;
    //             $scope.newRule = '';
    //         })
    //         .error(function (data, status){
    //             console.log(data);
    //         })
    // }
}]);
