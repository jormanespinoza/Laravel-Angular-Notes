'use strict';

angular.module('angularClientApp')
  .controller('NavigationCtrl', function($scope, $location, authUser, sessionControl) {
    $scope.isCurrentPath = function(path) {
      return $location.path() == path;
    };

    $scope.$watch(function() {
      return authUser.isLoggedIn();
    }, function(newVal) {
      if (typeof newVal !== 'undefined') {
        $scope.isLogin = authUser.isLoggedIn();
        console.log($scope.isLogin);
      }
    });

    var vm = this;

    vm.isLogin = authUser.isLoggedIn();

    vm.logout = function() {
      authUser.logout();
    };

    vm.user = {
      email: sessionControl.get('email'),
      name: sessionControl.get('username'),
      avatar: sessionControl.get('avatar')
    };

    $scope.$watch(function() {
      return sessionControl.get('email');
    }, function(newVal) {
      if (typeof newVal !== 'undefined') {
        vm.user.email = sessionControl.get('email');
      }
    });

    $scope.$watch(function() {
      return sessionControl.get('username');
    }, function(newVal) {
      if (typeof newVal !== 'undefined') {
        vm.user.name = sessionControl.get('username');
      }
    });

    $scope.$watch(function() {
      return sessionControl.get('avatar');
    }, function(newVal) {
      if (typeof newVal !== 'undefined') {
        vm.user.avatar = sessionControl.get('avatar');
      }
    });
  });
