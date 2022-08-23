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
    
    $scope.person = {
        name: 'Arthur Cintra',
        address: '555 Main St., New York, NY 11111'
    }

}]);

// second controller
myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
}]);

// adding new directive
myApp.directive("searchResult", function(){
    return{
        // other types of restrictions that are not defaults
        // C - Class names
        // M - Comments
        restrict: 'AE', // restricted to Atributes(A) and Elements(E) - this is the default setting
        templateUrl: 'directives/searchresult.html', // using a local template inside my directives folder
        replace: true, //replaces de tag in the html with the template instead of just putting inside the tag
        scope: { // isolated the scope so the directive doesnt have acess to the main controller scope
            personName: "@", // @ means text (grab the text from this atribute) we can also use @personName, but we can put it just @ cause of the name of the var
            personAddress: "@"
        }
    }
})