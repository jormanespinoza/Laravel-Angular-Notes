'use strict';

angular.module('authService', [])
  // Storage data after login
  .factory('sessionControl', function() {
    return {
      get: function(key) {
        return sessionStorage.getItem(key);
      },
      set: function(key, val) {
        return sessionStorage.setItem(key, val);
      },
      unset: function(key) {
        return sessionStorage.removeItem(key);
      }
    };
  })
  // Log in function
  .factory('authUser', function($auth, sessionControl, $location) {
    var login = function(loginForm) {
      $auth.login(loginForm).then(
        function(response) {
          cacheSession(
            response.data.user.email,
            response.data.user.name,
            response.data.user.avatar
          );

          $location.path('/');
          toastr.success('Session started');
        },
        function(error) {
          unCacheSession();
          toastr.error(error.data.error);
          console.log(error);
        }
      );
    };
    // Save session data
    var cacheSession = function(email, username, avatar) {
      sessionControl.set('userIsLogin', true);
      sessionControl.set('email', email);
      sessionControl.set('username', username);
      sessionControl.set('avatar', avatar);
    };
    // Remove session data
    var unCacheSession = function() {
      sessionControl.unset('userIsLogin');
      sessionControl.unset('email');
      sessionControl.unset('username');
      sessionControl.unset('avatar');
    };

    return {
      loginAPI: function(loginForm) {
        login(loginForm);
      },
      isLoggedIn: function() {
        return sessionControl.get('userIsLogin') !== null;
      },
      logout: function() {
        $auth.logout();
        unCacheSession();
        toastr.error('Session closed');
        $location.path('/');
      }
    };
  });
