'use strict';

/* App Module */

var nmsdemoApp = angular.module('nmsdemoApp', [
    'nmsdemoControllers',
    'treeDirectives',
    'perfect_scrollbar',
    'ui.router'
]);
nmsdemoApp.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider) {

    // Now set up the states
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "partials/main.html"
        });
}]);
