'use strict';

/**
 * @ngdoc function
 * @name cakeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cakeApp
 */


angular.module('cakeApp')
  .controller('BirthdayIdCtrl', function ($scope, $routeParams, Tart) {
    $scope.id = $routeParams.id;

		$scope.tarts = Tart.birthday();
		
		if ($scope.id < $scope.tarts.length)
			{
				$scope.nextSlide = parseInt($scope.id) + 1;
			}
		else
			{
				$scope.nextSlide = 1;
			}

		if ($scope.id > 1)
			{
				$scope.prevSlide = parseInt($scope.id) - 1;
			}
		else
			{
				$scope.prevSlide = $scope.tarts.length;
			}

    	$scope.tart = $scope.tarts.filter(function(value){
    		return (value.id === $scope.id);

    	})[0];
    });
 