'use strict';

angular.module('frontendTutorialApp')
  .controller('DashboardCtrl', function ($scope, $http, $log ) {

//        $http.get("/backend/cats").then( function( result ){
//            $log.info("number of cats is " + result.data.result );
//        });
        function getCats(){
            $http.get('/backend/user/cats').then(function( result ){
                $log.info(result.data);
                $scope.cats = result.data;
            })
        }
        getCats();





        $scope.submitCat = function(){
            $scope.pageError = "";
            $http({
                'method' : 'POST',
                'data': { 'fluffiness' : $scope.fluffiness},
                'url' : '/backend/user/cats'
            }).then(function(){
                   $log.info('cat was submitted');
                    $scope.fluffiness = "";
                    getCats();
                }, function( result ){
                    $log.info(['cat had an error!', result]);
                    $scope.pageError = result.data;

                });
        };



  });
