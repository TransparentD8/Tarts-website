'use strict';


angular.module('cakeApp')
  .directive('vk', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div id="vk"></div>',
    link: function (scope, element) {
      element.on('click', function() {
      	window.open('http://vk.com/katrinesuhanova');
	  });
    }
  };
});

angular.module('cakeApp')
  .directive('inst', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div id="inst"></div>',
    link: function (scope, element) {
      element.on('click', function() {
      	window.open('https://instagram.com/katesuhanova/');
	  });
    }
  };
});