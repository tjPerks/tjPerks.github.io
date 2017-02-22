'use strict';
/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular.module('portfolioApp', [
    'ngAnimate'
    , 'ngAria'
    , 'ngCookies'
    , 'ngMessages'
    , 'ngResource'
    , 'ngRoute'
    , 'ngSanitize'
    , 'ngTouch'
  ]).config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html'
        , controller: 'MainCtrl'
        , controllerAs: 'main'
    }).when('/about', {
        templateUrl: 'views/about.html'
        , controller: 'AboutCtrl'
        , controllerAs: 'about'
    }).when('/Resume', {
        templateUrl: 'views/resume.html'
        , controller: 'ResumeCtrl'
        , controllerAs: 'Resume'
    }).when('/Samples', {
        templateUrl: 'views/samples.html'
        , controller: 'SamplesCtrl'
        , controllerAs: 'Samples'
    }).when('/Contact', {
        templateUrl: 'views/contact.html'
        , controller: 'ContactCtrl'
        , controllerAs: 'Contact'
    }).otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(false).hashPrefix('');
    (function () {
        if ('registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template')) {
            // platform is good!
        }
        else {
            // polyfill the platform!
            var e = document.createElement('script');
            e.src = '/bower_components/webcomponentsjs/webcomponents-lite.min.js';
            document.body.appendChild(e);
        }
    })();
    
});