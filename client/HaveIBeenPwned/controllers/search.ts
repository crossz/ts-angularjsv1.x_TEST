
module HaveIBeenPwned {
    class SearchController {
        static $inject = ["PwnedService"];
        constructor(private pwnedService: IPwnedService) {
        }

        private breachedAccounts: BreachedAccount[];
        

        submit(address: string) {
            this.pwnedService.check(address).then((result : ng.IHttpPromiseCallbackArg<BreachedAccount[]>) =>{
                this.breachedAccounts = result.data;
            })
            .catch((reason : any) => {
                alert(reason.Message || reason.message);	
            });
        }


    }
    
    angular
       .module("HaveIBeenPwned")
       .controller("SearchController", SearchController);
}