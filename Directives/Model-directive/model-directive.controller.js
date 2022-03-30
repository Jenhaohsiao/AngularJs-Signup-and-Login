(function() {
    'use strict';

    angular
        .module('components')
        .controller('ModelDirectiveController', ModelDirectiveController);

    ModelDirectiveController.$inject = [
        '$mdDialog',
        'locals',
        '$timeout'
    ];

    function ModelDirectiveController(
        $mdDialog,
        locals,
        $timeout,
    ) {
        var vm = this;
        vm.isProcessed = false;
        vm.$onInit = $onInit;
        vm.closeDialog = closeDialog;
        vm.finishEdit = finishEdit;
        ////////////////

        function $onInit() {

            vm.result = locals.result;
            $timeout(function() {
                vm.isProcessed = true;
            }, locals.time);
        }

        function closeDialog() {
            $mdDialog.cancel();
        }

        function finishEdit(_response) {
            $mdDialog.hide(_response);
        }



    }
})();