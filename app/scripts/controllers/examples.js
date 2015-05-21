'use strict';

/**
 * @ngdoc function
 * @name cakeApp.controller:ExamplesCtrl
 * @description
 * # ExamplesCtrl
 * Controller of the cakeApp
 */
angular.module('cakeApp')
.controller('ExamplesCtrl', ['$scope', 'Tart', '$location', 
  function ($scope, Tart, $location) {
  	$scope.isActive = function(route) {
        return route === $location.path();
    };
  	Tart.list(function(data){
  		$scope.tarts = data;
  		
  	});
  	

    }]);

