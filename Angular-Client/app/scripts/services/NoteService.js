'use strict';

angular.module('angularClientApp')
  .factory('NoteResource', function($resource) {
    return $resource('http://localhost:8000/api/notes/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
