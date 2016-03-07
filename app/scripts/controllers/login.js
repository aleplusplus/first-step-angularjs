'use strict';

/**
 * @ngdoc function
 * @name first-step-angularjs.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of first-step-angularjs
 */
angular.module('first-step-angularjs')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {

      $location.path('/dashboard');

      return false;
    }

  });
