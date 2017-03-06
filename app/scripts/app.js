'use strict';

var angularApp = angular.module('angularjsFormBuilderApp', ['ui.bootstrap', 'mgcrea.ngStrap','ngRoute']);

angularApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/forms/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateCtrl'
        })
        .when('/forms/:id/view', {
            templateUrl: 'views/view.html',
            controller: 'ViewCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

}).run(['$rootScope',  function($rootScope) {
  var isElemementUnderClass = function(element, className) {
    if(element.hasClass(className)) return true;
    if(element.is('body')) return false;
    return isElemementUnderClass(element.parent(), className);
  };

  $rootScope.collapseEverything = function($event) {
    if(!isElemementUnderClass(angular.element($event.target), 'field-options'))
      $rootScope.$broadcast('COLLAPSE_FIELD_OPTIONS');
  };
}]);


