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
    'authService',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer',
    'angularUtils.directives.dirPagination'
  ])
  .config(function($routeProvider, $locationProvider, $authProvider) {
    $locationProvider.hashPrefix('');
    $authProvider.loginUrl = 'http://localhost:8000/api/authenticate';
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
        templateUrl: 'views/members/update.html',
        controller: 'EditUserCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, authUser) {
    var privateRoutes = ['/notes', '/members'];

    $rootScope.$on('$routeChangeStart', function() {
      if (($.inArray($location.path(), privateRoutes) !== -1) && !authUser.isLoggedIn()) {
        toastr.error('You must be logged in');
        $location.path('/login');
      }
    });
  });
