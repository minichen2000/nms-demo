'use strict';

/* Controllers */


  
var nmsdemoControllers=  angular.module('nmsdemoControllers', []);

nmsdemoControllers.controller('treeController',
function($scope) {
	$scope.neTreeData = neData;
	$scope.mapTreeData = mapData;
	$scope.tlTreeData = tlData;
	$scope.trailTreeData = trailData;
	$scope.pathTreeData = pathData;
	$scope.evcTreeData = evcData;
	$scope.leftTreeChanged={changed:true};
});  