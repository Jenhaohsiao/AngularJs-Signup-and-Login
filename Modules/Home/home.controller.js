(function() {
    'use strict';

    angular
        .module('components')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        'UserObjService',
    ];

    function HomeController(
        UserObjService,
    ) {
        var vm = this;
        vm.$onInit = $onInit();
        vm.title = "Home"
        vm.UserObjService = UserObjService;

        ////////////////

        function $onInit() {}
    }
})();