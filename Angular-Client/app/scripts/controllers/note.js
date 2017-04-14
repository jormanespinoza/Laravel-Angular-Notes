'use strict';

/**
 * @ngdoc function
 * @name angularClientApp.controller:NoteCtrl
 * @description
 * # NoteCtrl
 * Controller of the angularClientApp
 */
angular.module('angularClientApp')
    .controller('NoteCtrl', function ($scope, NoteResource, $location, $timeout) {
        $scope.Notes = NoteResource.query()
        // console.log($scope.Notes)
        $scope.removeNote = function (id) {
            NoteResource.delete({
                id : id
            })
            toastr.success('Your note has been deleted')
            $timeout(function () {
                $location.path('/notes');
            }, 1000)
        }

    })
    .controller('CreateNoteCtrl', function ($scope, NoteResource, $location, $timeout) {
        $scope.form = {
            title  : 'Create a Note',
            button : 'Save'
        }
        $scope.Note = {}
        $scope.saveNote = function () {
            // console.log($scope.Note)
            NoteResource.save($scope.Note)
            toastr.success('Your note has been storaged')
            $scope.Note = {}
            $timeout(function () {
                $location.path('/notes');
            }, 1000)
        }
    })
    .controller('EditNoteCtrl', function ($scope, NoteResource, $routeParams, $location, $timeout) {
        $scope.form = {
            title  : 'Edit Note',
            button : 'Update'
        }
        $scope.Note = NoteResource.get({
            id : $routeParams.id
        })
        $scope.saveNote = function () {
            // console.log($scope.Note)
            NoteResource.update($scope.Note)
            toastr.success('Your note has been updated')
            $timeout(function () {
                $location.path('/notes');
            }, 1000)
        }
    });
