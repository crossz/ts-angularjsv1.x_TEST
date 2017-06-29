module HaveIBeenPwned{	
    export interface IPwnedService {
	check(address:string) : ng.IPromise<{}>;
    }
	
    class PwnedService implements IPwnedService {
		
 	    static $inject = ["$http"];
	    constructor(private $http : ng.IHttpService) {			
	    }
		
        // check(address:string) : ng.IPromise<{}> {
        check(address:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<BreachedAccount[]>> {
            // TODO: need to adjst the API address
            return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);    
        }	
    }
	
    angular
	.module("HaveIBeenPwned")
    	.service("PwnedService", PwnedService);
}