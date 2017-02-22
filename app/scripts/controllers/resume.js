'use strict';
/**
 * @ngdoc function
 * @name portfolioApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp').controller('ResumeCtrl', function ($scope) {
    $scope.exp = false;
    $scope.skills = true;
    $scope.education = false;
    $scope.misc = false;
    
    $scope.changeEx = function () {
        $scope.exp = true;
        $scope.skills = false;
        $scope.education = false;
        $scope.misc = false;
    };
    $scope.changeSkills = function () {
        $scope.exp = false;
        $scope.skills = true;
        $scope.education = false;
        $scope.misc = false;
    };
    $scope.changeEdu = function () {
        $scope.exp = false;
        $scope.skills = false;
        $scope.education = true;
        $scope.misc = false;
    };
    $scope.changeMisc = function () {
        $scope.exp = false;
        $scope.skills = false;
        $scope.education = false;
        $scope.misc = true;
    };
});