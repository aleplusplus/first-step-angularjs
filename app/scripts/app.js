'use strict';

/**
 * @name first-step-angularjs
 * @description
 * # first-step-angularjs
 *
 * Main module of the application.
 */
angular
    .module('first-step-angularjs', [
        'ui.router',
        'snap',
        'ngAnimate',
        'ngResource',
        'first-step-angularjs.services',
        'angular-carousel'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('/dashboard', '/dashboard/devices');
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('base', {
                abstract: true,
                url: '',
                templateUrl: 'views/base.html'
            })
            .state('login', {
                url: '/login',
                parent: 'base',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                parent: 'base',
                templateUrl: 'views/dashboard.html',
                controller: 'DeviceCtrl'
            })
            .state('devices', {
                url: '/devices',
                parent: 'dashboard',
                templateUrl: '../views/dashboard/devices/devices.html',
                controller: 'DeviceListController'
            })
            .state('viewDevice', {
                url: '/devices/:id/view',
                parent: 'dashboard',
                templateUrl: '../views/dashboard/devices/device-view.html',
                controller: 'DeviceViewController'
            })
            .state('newDevice',{
                url: '/devices/new',
                parent: 'dashboard',
                templateUrl: '../views/dashboard/devices/device-add.html',
                controller: 'DeviceCreateController'
            })
            .state('editDevice', {
                url: '/devices/:id/edit',
                parent: 'dashboard',
                templateUrl: '../views/dashboard/devices/device-edit.html',
                controller: 'DeviceEditController'
            })
            .state('reports', {
                url: '/reports',
                parent: 'dashboard',
                templateUrl: 'views/dashboard/reports.html'
            });
    });
