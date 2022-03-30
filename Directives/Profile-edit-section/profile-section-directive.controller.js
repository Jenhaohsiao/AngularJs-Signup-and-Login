(function () {
    'use strict';

    angular
        .module('components')
        .controller('ProfileSectionDirectiveController', ProfileSectionDirectiveController);

    ProfileSectionDirectiveController.$inject = [
        "$scope",
        "UserObjService",
        "$location",
        "$mdDialog",
    ];

    function ProfileSectionDirectiveController(
        $scope,
        UserObjService,
        $location,
        $mdDialog,
    ) {
        var vm = this;
        vm.genderList = [{
                name: "Female",
                value: "female"
            },
            {
                name: "Male",
                value: "male"
            },
            {
                name: "Would rather not answer",
                value: "notAnswer"
            }
        ];
        vm.isPasswordVisible = false;
        vm.isConfirmPasswordVisible = false;
        // ==================================================
        vm.$onInit = $onInit();
        vm.passwordChanged = passwordChanged;
        vm.saveDoc = saveDoc;
        vm.showConfirm = showConfirm;
        // ==================================================

        function $onInit() {


            vm.action = $scope.action;

            if (vm.action === "signup") {
                vm.doc = UserObjService.getUserInit();
                vm.editable = true;
            } else {
                vm.doc = UserObjService.getUser();
                vm.editable = false;
            };

            console.log("vm.doc:", vm.doc)

        }

        function passwordChanged() {
            if (vm.doc.password) {
                vm.passwordregExp = '^(' + vm.doc.password + ')$';

            } else {
                return;
            }
        }

        function saveDoc() {

            const saveResult = UserObjService.saveUserToList(vm.doc);
            if (saveResult) {
                showConfirm(saveResult)
            }

        }

        function showConfirm(outerResult) {

            $mdDialog.show({
                    controller: 'ModelDirectiveController',
                    controllerAs: 'vm',
                    templateUrl: 'Directives/Model-directive/model-directive.html',
                    locals: {
                        result: outerResult,
                        time: 2000,
                    },
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: false
                })
                .then(function (answer) {
                    $location.path("/")
                }, function () {});
        };

        $scope.$watch('vm.doc.address.country', function (newValue, oldValue) {
            if (newValue) {
                switch (newValue) {
                    case 'canada':
                        vm.postalPattern = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
                        break;

                    case 'usa':
                        vm.postalPattern = /^[0-9]{5}(?:-[0-9]{4})?$/
                        break;
                    default:
                        vm.postalPattern = null;
                        break;
                }
            } else {
                return;
            }
        });

    }
})();