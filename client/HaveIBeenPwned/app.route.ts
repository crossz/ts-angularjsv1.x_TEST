///<reference path="../../node_modules/@types/angular-route/index.d.ts"/>

module HaveIBeenPwned {
    "use strict";

    function routeConfig($routeProvider: ng.route.IRouteProvider){ 
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

    routeConfig.$inject = ["$routeProvider"]

    angular
        .module("HaveIBeenPwned")
        .config(routeConfig);
}

