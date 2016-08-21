var app = angular.module("submit.order.service", []);
app.factory('submitOrder', function($http) {
    var menu = {
        init: function (order) {
            $http.post('http://rva-dev.com/contact_rob.php', order).then(function(res){
                console.log("Just submitted!");
            });
        }
    };
    return menu;
});