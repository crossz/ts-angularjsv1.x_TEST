///<reference path="../../node_modules/@types/angular-route/index.d.ts"/>
var HaveIBeenPwned;
(function (HaveIBeenPwned) {
    "use strict";
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/search", {
            templateUrl: "/client/HaveIBeenPwned/views/_search.html",
            controller: "SearchController",
            controllerAs: "vm"
        })
            .otherwise({
            redirectTo: "/search"
        });
    }
    routeConfig.$inject = ["$routeProvider"];
    angular
        .module("HaveIBeenPwned")
        .config(routeConfig);
})(HaveIBeenPwned || (HaveIBeenPwned = {}));
