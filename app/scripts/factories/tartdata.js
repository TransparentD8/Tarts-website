'use strict';


angular.module('cakeApp')
  .factory('Tart', function () {
    return {
    	fruits: function() {
    		return [
			    {'src':'images/tarts/11.jpg', 'id':'1', 'title':'5'},
			    {'src':'images/tarts/12.jpg', 'id':'2', 'title':'6'},
			    {'src':'images/tarts/13.jpg', 'id':'3', 'title':'7'},
			    {'src':'images/tarts/14.jpg', 'id':'4', 'title':'8'}
			];
    	},

    	casual: function() {
    		return [
			    {'src':'images/tarts/5.jpg', 'id':'1', 'title':'9'},
			    {'src':'images/tarts/6.jpg', 'id':'2', 'title':'10'},
			    {'src':'images/tarts/7.jpg', 'id':'3', 'title':'11'},
			    {'src':'images/tarts/8.jpg', 'id':'4', 'title':'12'},
			    {'src':'images/tarts/9.jpg', 'id':'5', 'title':'13'},
			    {'src':'images/tarts/10.jpg', 'id':'6', 'title':'14'}
			];
    	},

    	birthday: function() {
    		return [
			    {'src':'images/tarts/1.jpg', 'id':'1', 'title':'1'},
			    {'src':'images/tarts/2.jpg', 'id':'2', 'title':'2'},
			    {'src':'images/tarts/3.jpg', 'id':'3', 'title':'3'},
			    {'src':'images/tarts/4.jpg', 'id':'4', 'title':'4'}
			];

    	}
    };
  });
