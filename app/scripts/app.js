'use strict';

angular.module('frontendTutorialApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .when('/chat', {
            templateUrl : 'views/chatroom.html',
            controller: 'ChatCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
