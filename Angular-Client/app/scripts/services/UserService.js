'use strict';

angular.module('angularClientApp')
    .factory('UserResource', function ($resource) {
        return $resource('http://localhost:8000/api/members/:id', {
            id : '@id'
        }, {
          update: {
              method : 'PUT'
          }
        })
    });
