'use strict';

/**
 * @ngdoc function
 * @name cakeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cakeApp
 */


angular.module('cakeApp')
  .controller('examplesIdCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
