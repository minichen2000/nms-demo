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
                    views: {
                        "middleView": {
                            templateUrl: "partials/treeitemdetailsmiddle.html",
                            controller: 'TreeItemDetailsMiddleController',
                            controllerAs: 'vm'
                        },
                        "operationView": {
                            templateUrl: "partials/treeitemdetailsoperation.html",
                            controller: 'TreeItemDetailsOperationController',
                            controllerAs: 'vm'
                        }
                    }

                });
        }]);

