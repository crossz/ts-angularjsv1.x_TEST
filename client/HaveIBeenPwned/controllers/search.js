var HaveIBeenPwned;
(function (HaveIBeenPwned) {
    var SearchController = (function () {
        function SearchController(pwnedService) {
            this.pwnedService = pwnedService;
        }
        SearchController.prototype.submit = function (address) {
            var _this = this;
            this.pwnedService.check(address).then(function (result) {
                _this.breachedAccounts = result.data;
            })
                .catch(function (reason) {
                alert(reason.Message || reason.message);
            });
        };
        SearchController.$inject = ["PwnedService"];
        return SearchController;
    }());
    angular
        .module("HaveIBeenPwned")
        .controller("SearchController", SearchController);
})(HaveIBeenPwned || (HaveIBeenPwned = {}));
