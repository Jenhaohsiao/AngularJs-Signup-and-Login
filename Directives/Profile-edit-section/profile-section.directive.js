angular.module('components', [])

.directive('profile', function() {
    return {
        restrict: 'EA',
        transclude: true,
        scope: {
            action: '@',
        },
        controller: 'ProfileSectionDirectiveController',
        controllerAs: 'vm',
        templateUrl: 'Directives/Profile-edit-section/profile-section.directive.html',
    };
})