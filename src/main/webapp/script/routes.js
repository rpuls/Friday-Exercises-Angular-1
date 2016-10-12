var app = angular.module('routes', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/newperson", {
            templateUrl: "/newperson.html",
            controller: "PersonController"
        })
        .otherwise({
            redirectTo: "/"
        })
});

app.controller("PersonController", function ($scope) {
    $scope.home = "Home View for this site";
})