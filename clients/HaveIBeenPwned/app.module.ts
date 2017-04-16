module HaveIBeenPwned {	
        
    export interface IPwnedService {
        check(address:string) : ng.IPromise<{}>;
    }
	
    class PwnedService implements IPwnedService {
		
        static $inject = ["$http"];
        constructor(private $http : ng.IHttpService) {

        }
            
        check(address:string) : ng.IPromise<{}> {
            
        }




        
    }
	

    angular
	.module("HaveIBeenPwned")
    .service("PwnedService", PwnedService);
}