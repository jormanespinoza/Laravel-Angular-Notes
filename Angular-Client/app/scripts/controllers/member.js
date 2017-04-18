'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
  .controller('UserCtrl', function($scope, UserResource, $location, $timeout) {
    $scope.Users = UserResource.query();
    // console.log($scope.Users)
    $scope.removeUser = function(id) {
      UserResource.delete({
        id: id
      });
      toastr.success('The user has been deleted')
      $timeout(function() {
        $location.path('/members');
      }, 100)
    };

  })
  .controller('CreateUserCtrl', function($scope, UserResource, $location, $timeout) {
    $scope.form = {
      title: 'New User',
      button: 'Save'
    };
    $scope.User = {};
    $scope.saveUser = function() {
      // console.log($scope.User)
      UserResource.save($scope.User)
      toastr.success('Your User has been storaged');
      $scope.User = {}
      $timeout(function() {
        $location.path('/members');
      }, 100);
    };
  })
  .controller('EditUserCtrl', function($scope, UserResource, $routeParams, $location, $timeout) {
    $scope.form = {
      title: 'Edit User',
      button: 'Update'
    };
    $scope.User = UserResource.get({
      id: $routeParams.id
    });
    $scope.saveUser = function() {
      // console.log($scope.User)
      UserResource.update($scope.User)
      toastr.success('The user has been updated')
      $timeout(function() {
        $location.path('/members');
      }, 100);
    };
  });
