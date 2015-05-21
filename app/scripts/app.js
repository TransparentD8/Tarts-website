'use strict';

/**
 * @ngdoc overview
 * @name cakeApp
 * @description
 * # cakeApp
 *
 * Main module of the application.
 */
angular
  .module('cakeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/examples', {
        templateUrl: 'views/examples.html',
        controller: 'ExamplesCtrl'
      })
      .when('/examples/:id', {
        templateUrl: 'views/individual.html',
        controller: 'ExamplesIdCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
