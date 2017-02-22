'use strict';
/**
 * @ngdoc function
 * @name portfolioApp.controller:SamplesCtrl
 * @description
 * # SamplesCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp').controller('SamplesCtrl', function ($scope) {
    $scope.book = false;
    $scope.contact = false;
    $scope.changeBook = function () {
        $scope.book = true;
        $scope.contact = false;
    };
    $scope.changeContact = function () {
        $scope.book = false;
        $scope.contact = true;
    };
});