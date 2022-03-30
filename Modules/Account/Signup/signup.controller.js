(function() {
    'use strict';

    angular
        .module('components')
        .controller('SignupController', SignupController);

    SignupController.$inject = [
        'UserObjService',
    ];

    function SignupController(
        UserObjService,
    ) {
        var vm = this;
        vm.UserObjService = UserObjService;
        vm.$onInit = $onInit();
        vm.title = "Signup"

        ////////////////

        function $onInit() {
            console.log("SignupController")
        }
    }
})();