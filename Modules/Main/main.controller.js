 angular.module('mainApp', [
         'ngMaterial',
         'ngMessages',
         'components',
         'ngRoute',
         'ui.bootstrap',
     ])

     .controller('AppMainController', function (
         $scope,
         $route,
         $routeParams,
         $location,
         UserObjService,
         $mdDialog,
     ) {
         var vm = this;
         vm.UserObjService = UserObjService;
         vm.logout = logout;
         vm.showConfirm = showConfirm;
         //  =======================================


         function logout() {
             const result = vm.UserObjService.setIsLogin(false)

             if (result) {
                 showConfirm(result)
             }
         }

         function showConfirm(outerResult) {

             $mdDialog.show({
                     controller: 'ModelDirectiveController',
                     controllerAs: 'vm',
                     templateUrl: 'Directives/Model-directive/model-directive.html',
                     locals: {
                         result: outerResult,
                         time: 500,
                     },
                     parent: angular.element(document.body),
                     clickOutsideToClose: true,
                     fullscreen: false
                 })
                 .then(function (answer) {
                     $location.path("/")
                 }, function () {});
         };


     })

     .config(function (
         $routeProvider,
         $locationProvider
     ) {
         $routeProvider
             .when('/', {
                 templateUrl: 'Modules/Home/home.html',
                 controller: 'HomeController',
                 controllerAs: "vm",
             })
             .when('/account', {
                 templateUrl: 'Modules/Account/account.html',
                 controller: 'AccountController',
                 controllerAs: "vm",
             })
             .when('/account/signup', {
                 templateUrl: 'Modules/Account/Signup/signup.html',
                 controller: 'AccountController',
                 controllerAs: "vm",
             })
             .when('/account/profile', {
                 templateUrl: 'Modules/Account/Profile/profile.html',
                 controller: 'ProfileController',
                 controllerAs: "vm",
             })
             .when('/account/signup', {
                 templateUrl: 'Modules/Account/Signup/signup.html',
                 controller: 'SignupController',
                 controllerAs: "vm",
             })
             .when('/account/login', {
                 templateUrl: 'Modules/Account/Login/login.html',
                 controller: 'LoginController',
                 controllerAs: "vm",
             })
             .when('/todo', {
                 templateUrl: 'Modules/Todo/todo.html',
                 controller: 'TodoController',
                 controllerAs: "vm",
             })
             .otherwise({
                 templateUrl: '404.html',
             });

     });