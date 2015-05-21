'use strict';

/**
 * @ngdoc function
 * @name cakeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cakeApp
 */
angular.module('cakeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
