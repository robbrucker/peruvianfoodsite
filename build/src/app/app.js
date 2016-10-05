angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'submit.order.service',
  'menu.api.service',
  'config.api.service',
  'ui.router'
])

.config( function myAppConfig ( $locationProvider ) {
  $locationProvider.html5Mode(true);
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $state, $anchorScroll, submitOrder, menuApiService ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
  });

  /**
   * Api Integration
     */

 menuApiService.getMenu().then(function(menu) {
   $scope.menu = menu;
   console.log("Menu is ", menu);
   $scope.order = {};
   $scope.appetizers = menuApiService.getAppetizers(menu);
   console.log("Appetizers are ", $scope.appetizers);
   $scope.entrees = menuApiService.getEntrees(menu);
   $scope.sides = menuApiService.getSides(menu);
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


   /**
    * Watch
    */
   $scope.$watch('searchText', function(newValue, oldValue) {
     if(!newValue) {
       $scope.appetizers = menuApiService.getAppetizers(menu);
       $scope.entrees = menuApiService.getEntrees(menu);
       $scope.sides = menuApiService.getSides(menu);

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

   /**
    * Filters
    */
   $scope.vegetarianFilter = false;
   $scope.filterMenu = function(onState, criteria) {
     if(criteria === 'vegetarian' && (onState === false || !onState)) {
       $scope.appetizers = _.filter($scope.appetizers, {is_vegetarian: true});
       $scope.entrees = _.filter($scope.entrees, {is_vegetarian: true});
       // $scope.sides = _.filter($scope.entrees, {isVegetarian: true});
     }
     else if(criteria === 'vegetarian' && onState === true) {
       $scope.appetizers = menuApiService.getAppetizers($scope.menu);
       $scope.entrees = menuApiService.getEntrees($scope.menu);
       $scope.sides = menuApiService.getSides($scope.menu);
     }
   };


   /**
    * Text Search
    * @param text
    */
   $scope.textSearch = function(text) {
     $scope.appetizers = _.filter($scope.appetizers, function(val) {
       console.log("Given val ", val);
       return _.includes(text, val.description);
     });
   };


  });
  /**
   * END MENU BASED FUNCTIONS
   */
  /**
   * Static function
   */
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

