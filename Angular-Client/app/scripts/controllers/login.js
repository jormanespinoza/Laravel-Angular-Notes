'use strict'

angular.module('angularClientApp')
  .controller('LoginCtrl', function(authUser) {
    var vm = this;

    vm.loginForm = {
      email: 'jdaniel.espinoza89@gmail.com',
      password: 'jespinoza'
    };

    vm.loginSubmit = function() {
      // console.log(vm.loginForm);
      authUser.loginAPI(vm.loginForm)
    }
  });
