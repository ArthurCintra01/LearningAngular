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
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    }
    $scope.formattedAddress = function(person) {

        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;

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
            personObject: "=", // = means "two way biding, any changes you make to the object inside the html he aplies to the actual object"
            // it also gives the directive scope acess to the object's atributes
            formattedAddressFunction: "&" // to tell it is a function
        }
    }
})