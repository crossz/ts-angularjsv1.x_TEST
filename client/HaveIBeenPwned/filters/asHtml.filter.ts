module HaveIBeenPwned{
    "use strict";

    export function asHtml($sce : ng.ISCEService) {
        return (text : string) => {
            return $sce.trustAsHtml(text);
        }
    }
	
    asHtml.$inject = ["$sce"];

    angular
	.module("HaveIBeenPwned")
	.filter("asHtml", asHtml);
		

}