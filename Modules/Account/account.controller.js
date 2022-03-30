(function() {
    'use strict';

    angular
        .module('components')
        .controller('AccountController', AccountController);

    AccountController.$inject = [
        'UserObjService',
    ];

    function AccountController(
        UserObjService,
    ) {
        var vm = this;
        vm.UserObjService = UserObjService;
        vm.$onInit = $onInit();
        vm.title = "Account"

        ////////////////

        function $onInit() {
            console.log("AccountController")
        }
    }
})();