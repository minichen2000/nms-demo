'use strict';

/* App Module Config*/

angular
    .module('nmsdemoApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider) {

            $stateProvider
                .state('main', {
                    url: "/main",
                    templateUrl: "partials/main.html",
                    controller: 'TreeController',
                    controllerAs: 'vm'
                })
                .state('main.treeitem', {
                    url: "/treeitem:treeItemName",
                    templateUrl: "partials/treeitemdetails.html",
                    controller: 'TreeItemDetailsController',
                    controllerAs: 'vm'
                });
        }]);

