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
  
  $scope.vegetarianFilter = false;
  $scope.filterMenu = function(onState, criteria) {
    if(criteria === 'vegetarian' && (onState === false || !onState)) {
      $scope.appetizers = _.filter($scope.appetizers, {isVegetarian: true});
      $scope.entrees = _.filter($scope.entrees, {isVegetarian: true});
     // $scope.sides = _.filter($scope.entrees, {isVegetarian: true});
    }
    else if(criteria === 'vegetarian' && onState === true) {
      $scope.appetizers = menuService.getAppetizers();
      $scope.entrees = menuService.getEntrees();
      $scope.sides = menuService.getSides();
    }
  };

  $scope.textSearch = function(text) {
    $scope.appetizers = _.filter($scope.appetizers, function(val) {
        console.log("Given val ", val);
        return _.includes(text, val.description);
    });
  };


  $scope.$watch('searchText', function(newValue, oldValue) {
    if(!newValue) {
      $scope.appetizers = menuService.getAppetizers();
      $scope.entrees = menuService.getEntrees();
      $scope.sides = menuService.getSides();

    }

    else if(newValue && oldValue) {
      newValue = newValue.toLowerCase();
      $scope.appetizers = _.filter($scope.appetizers, function(val) {
        return _.includes(val.description.toLowerCase(), newValue) || _.includes(val.name.toLowerCase(), newValue);
      });
      $scope.entrees = _.filter($scope.entrees, function(val) {
        return _.includes(val.description.toLowerCase(), newValue) || _.includes(val.name.toLowerCase(), newValue);
      });
      $scope.sides = _.filter($scope.sides, function(val) {
        return _.includes(val.description.toLowerCase(), newValue) || _.includes(val.name.toLowerCase(), newValue);
      });




    }
  });


  $scope.thankUser = function() {
    if($scope.order && $scope.order.orderEmail && $scope.order.orderLocation && $scope.order.orderName) {
      alert("Thank you for ordering. If you have any questions, please contact us at peruvianfoodinrva@gmail.com");
    }
    else {
      alert("Please fill out all 4 fields");
    }

  };
})

;

