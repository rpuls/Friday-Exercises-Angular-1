
var app = angular.module('personApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/newperson", {
                templateUrl: "views/newperson.html",
                controller: "PersonController"
            })
            .otherwise({
                redirectTo: "/"
            })
});


app.controller('PersonController', function () {
    var self = this;
    self.persons = [
        {id: 1, name: "Jens", age: 18},
        {id: 2, name: "Peter", age: 23},
        {id: 3, name: "Hanne", age: 23}
    ];

    self.viewPerson = {id: "", name: "", age: ""};

    self.getPerson = function (id) {
        self.viewPerson = self.persons[id - 1];
    };

    self.getNextId = function () {
        return self.persons.length + 1;
    };


        self.name = "";
        self.age = "";
    self.addPerson = function () {
        self.id = self.getNextId();

        self.persons.push({id: self.id, name: self.name, age: self.age});
    };


});