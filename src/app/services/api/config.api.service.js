var app = angular.module("config.api.service", []);
app.factory('configApiService', function() {
    var config = {
        getApiUrl: function() {
           return "http://localhost:3000/";
        }
    };
    return config;
});