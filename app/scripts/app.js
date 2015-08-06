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
    'angular-carousel',
    'uiGmapgoogle-maps',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function ($templateCache, $http) {
        $http.get('views/birthday.html', { cache: $templateCache });
        $http.get('views/casual.html', { cache: $templateCache });
        $http.get('views/examples.html', { cache: $templateCache });
        $http.get('views/about.html', { cache: $templateCache });
        $http.get('views/main.html', { cache: $templateCache });
    });
  angular.module('cakeApp')
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
      .when('/fruits', {
        templateUrl: 'views/fruits.html',
        controller: 'ExamplesCtrl'
      })
      .when('/fruits/:id', {
        templateUrl: 'views/fruitsInd.html',
        controller: 'FruitsIdCtrl'
      })
      .when('/birthday', {
        templateUrl: 'views/birthday.html',
        controller: 'ExamplesCtrl'
      })
      .when('/birthday/:id', {
        templateUrl: 'views/birthdayInd.html',
        controller: 'BirthdayIdCtrl'
      })
      .when('/casual', {
        templateUrl: 'views/casual.html',
        controller: 'ExamplesCtrl'
      })
      .when('/casual/:id', {
        templateUrl: 'views/birthdayInd.html',
        controller: 'CasualIdCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
