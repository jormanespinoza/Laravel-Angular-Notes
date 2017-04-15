'use strict';

/**
 * @ngdoc overview
 * @name angularClientApp
 * @description
 * # angularClientApp
 *
 * Main module of the application.
 */
angular
  .module('angularClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/notes', {
        templateUrl: 'views/notes/index.html',
        controller: 'NoteCtrl'
      })
      .when('/notes/new', {
        templateUrl: 'views/notes/create.html',
        controller: 'CreateNoteCtrl'

      })
      .when('/notes/edit/:id', {
        templateUrl: 'views/notes/create.html',
        controller: 'EditNoteCtrl'
      })
      .when('/members', {
        templateUrl: 'views/members/index.html',
        controller: 'UserCtrl'
      })
      .when('/members/new', {
        templateUrl: 'views/members/create.html',
        controller: 'CreateUserCtrl'
      })
      .when('/members/edit/:id', {
        templateUrl: 'views/members/create.html',
        controller: 'EditUserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
