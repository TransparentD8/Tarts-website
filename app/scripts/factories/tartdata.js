'use strict';


angular.module('cakeApp')
  .factory('Tart', ['$http' , function ($http) {
    return {
    	list: function(callback) {
    		$http.get('/api/tarts.json').success(callback);
    	}
    };
  }]);
