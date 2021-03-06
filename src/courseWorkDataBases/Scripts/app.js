﻿(function () {
    'use strict';

    angular.module('scheduleKpi', [
        // Angular modules 
        'ngAnimate',
        'ngRoute',

        // Custom modules
        'groupsService',
        'specialityService',
        'teachersService'

        // 3rd Party Modules

    ]);

    angular.module('scheduleKpi').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'groupsController'
            })
            .when('/groups', {
                templateUrl: 'partials/groups.html',
                controller: 'groupsController'
            })
            .when('/groups/edit/:id', {
                templateUrl: 'partials/groupsEdit.html',
                controller: 'groupsEditController'
            })
            .when('/specialities', {
                templateUrl: 'partials/specialities.html',
                controller: 'specialityController'
            })
            .when('/specialities/edit/:id', {
                templateUrl: 'partials/specialitiesEdit.html',
                controller: 'specialityEditController'
            })
            .when('/teachers', {
                templateUrl: 'partials/teachers.html',
                controller: 'teachersController'
            })
            .when('/teachers/edit/:id', {
                templateUrl: 'partials/teachersEdit.html',
                controller: 'teachersEditController'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'adminsController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

    }]).directive('navbar', function () {
        return {
            templateUrl: 'partials/navbar.html'
        }
    });

})();