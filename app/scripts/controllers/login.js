'use strict';

angular.module('frontendTutorialApp')
    .controller('LoginCtrl', function ($scope, $log, $http, $location ) {

        $scope.doLogin = function(){
            $log.info("logging in");

            var params = {
                username: $scope.username,
                password: $scope.password,
                rememberMe : $scope.rememberMe
            };



            $http({
                url: '/backend/login',
                method: 'GET',
                params: params
            }).then(function(){
                $log.info("got response from backend");
                $location.path( "/dashboard" );
            });

        }
    });
