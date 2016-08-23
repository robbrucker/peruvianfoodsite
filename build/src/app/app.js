angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'menu.service',
  'submit.order.service',
  'ui.router'
])

.config( function myAppConfig ( $locationProvider ) {
  $locationProvider.html5Mode(true);
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, menuService, $state, $anchorScroll, submitOrder ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
  });

  $scope.order = {};
  $scope.appetizers = menuService.getAppetizers();
  $scope.entrees = menuService.getEntrees();
  $scope.sides = menuService.getSides();
  $scope.submitOrder = function() {
    console.log("Order is ", $scope.order);
    submitOrder.init($scope.order);
    alert("Thank you! Your order has been submitted");
  };
  $scope.toggleMenu = function() {
    var result = document.getElementsByClassName("side-bar");
    angular.element(result).toggleClass("active");
  };
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  };

  $scope.thankUser = function() {
    alert("Thank you for ordering. If you have any questions, please contact us at peruvianfoodinrva@gmail.com");
  };
})

;

