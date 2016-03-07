'use strict';

/**
 * @name first-step-angularjs.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of first-step-angularjs
 */
angular.module('first-step-angularjs')
    .controller('DeviceCtrl', function($scope, $state) {
        $scope.$state = $state;
    })
    .controller('DeviceListController',function($scope,$state,popupService,$window,Device){

        $scope.devices=Device.query();

        $scope.deleteDevice=function(device){
            if(popupService.showPopup('Really delete this?')){
                $scope.devices.splice(device,1)
                //device.$delete(function(){
                //    $window.location.href='';
                //});
            }
        }

    }).controller('DeviceViewController',function($scope,$stateParams,Device){

        $scope.device = Device.get({phoneId: $stateParams.id}, function(device) {
            $scope.mainImageUrl = device.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };

    }).controller('DeviceCreateController',function($scope,$state,$stateParams,Device){

        $scope.device=new Device();

        $scope.addDevice=function(){
            //$scope.device.$save(function(){
            $state.go('devices');
            //});
        }

    }).controller('DeviceEditController',function($scope,$state,$stateParams,Device){

        $scope.updateDevice=function(){
            //$scope.device.$update(function(){
            $state.go('devices');
            //});
        };

        $scope.loadDevice=function(){
            $scope.device=Device.get({phoneId: $stateParams.id});
        };

        $scope.loadDevice();
    });