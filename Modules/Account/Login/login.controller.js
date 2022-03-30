(function () {
    'use strict';

    angular
        .module('components')
        .controller('LoginController', LoginController);

    LoginController.$inject = [
        'UserObjService',
        '$location',
        '$mdDialog',
    ];

    function LoginController(
        UserObjService,
        $location,
        $mdDialog,
    ) {
        var vm = this;
        vm.UserObjService = UserObjService;
        vm.isPasswordVisible = false;
        vm.$onInit = $onInit();
        vm.login = login;
        vm.showConfirm = showConfirm;
        ////////////////

        function $onInit() {
            console.log("LoginController");
        }

        function login() {

            if (!vm.doc.email || !vm.doc.password) {
                return {
                    isSuccess: false,
                    message: "It needs email and password to login"
                }
            }

            const result = UserObjService.isPasswordConfirmed(vm.doc);
            console.log("login result:", result)

            if (result) {

                showConfirm(result);

            }

        }

        function showConfirm(outerResult) {

            $mdDialog.show({
                    controller: 'ModelDirectiveController',
                    controllerAs: 'vm',
                    templateUrl: 'Directives/Model-directive/model-directive.html',
                    locals: {
                        result: outerResult,
                        time: 1500,
                    },
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: false
                })
                .then(function (answer) {
                    $location.path("/")
                }, function () {});
        };
    }
})();