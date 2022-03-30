(function() {
    'use strict';

    angular
        .module('components')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [
        'UserObjService',
    ];

    function ProfileController(
        UserObjService,
    ) {
        var vm = this;
        vm.$onInit = $onInit();
        vm.title = "Profile"
        vm.UserObjService = UserObjService;

        ////////////////

        function $onInit() {
            console.log("ProfileController")
        }
    }
})();