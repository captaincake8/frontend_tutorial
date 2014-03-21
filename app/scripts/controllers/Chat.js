'use strict';

angular.module('frontendTutorialApp')
  .controller('ChatCtrl', function ($scope, $http, $log ) {
        $log.info('getting users');
        $http.get('/backend/users').then(function( result ){
            $log.info('got users');
            $log.info(result.data);
            $scope.users = result.data;
        });

        $scope.selectUser = function( user ){
            $scope.selectedUser = user;
        };

        $scope.sendMessage = function(){
          $http.post('/backend/user/sendMessage', {"message" : $scope.message, "to":$scope.selectedUser._id }).then( function( result ){
              $log.info(result.data);
          })
        };

        function getMessages(){
            $scope.$apply( function(){
                 $http.get('/backend/user/messages').then( function(result){
                     $scope.messages = result.data;
                 })
            })
        }

        setInterval( getMessages, 1000);
  });
