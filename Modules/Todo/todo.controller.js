(function() {
    'use strict';

    angular
        .module('components')
        .controller('TodoController', TodoController);

    TodoController.$inject = [];

    function TodoController() {
        var vm = this;
        vm.$onInit = $onInit();
        vm.title = "Todo"

        ////////////////

        function $onInit() {
            console.log("TodoController")
        }
    }
})();