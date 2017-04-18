'use strict';

angular.module('angularClientApp')
  .controller('NavigationCtrl', function($scope, $location, authUser, sessionControl) {
    $scope.isCurrentPath = function(path) {
      return $location.path() == path;
    };

    $scope.logout = function() {
      authUser.logout()
    };
  });
