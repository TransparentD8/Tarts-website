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
    $scope.map = { center: { latitude: 48.501045, longitude: 32.247949 }, zoom: 18 };
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 48.501045,
        longitude: 32.247949
      }};
  });
