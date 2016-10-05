var app = angular.module("menu.api.service", []);
app.factory('menuApiService', function(configApiService, $http) {
    var menu = {
        getMenu: function() {
            var url = configApiService.getApiUrl();
            return $http.get(url + 'meals?include_dish_type=true&include_food_style=true').then(function(response) {
                return response.data;
            });
        },
        getAppetizers: function (menu) {
            return _.filter(menu, function(m) {
                return m.dish_type.name === 'Appetizers';
            });
        },
        getEntrees: function(menu) {
            return _.filter(menu, function(m) {
                return m.dish_type.name === 'Meat Entrees' || m.dish_type.name === 'Vegetarian Entrees' || m.dish_type.name === 'Seafood Entrees';
            });
        },
        getSides: function(menu) {
            return _.filter(menu, function(m) {
                return m.dish_type.name === 'Sides';
            });
        }
    };
    return menu;
});