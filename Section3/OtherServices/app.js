var myApp = angular.module('myApp', ['ngMessages','ngResource']);

myApp.controller('mainController', function($scope, $log , $filter, $resource) {
    // angular $log functions
    // $log.log("Hello");
    // $log.info("this is some information");
    // $log.warn("Warning!");
    // $log.debug("Some debug information");
    // $log.error("This is an error example!!!")

    // filter 
    // $scope.name = 'Arthur';
    // $scope.formattedname = $filter('uppercase')($scope.name);

    // $log.info($scope.name);
    // $log.info($scope.formattedname);
    console.log($resource);
});