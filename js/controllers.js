'use strict';

/* Controllers */


  
var nmsdemoControllers=  angular.module('nmsdemoControllers', []);

nmsdemoControllers.controller('treeController',
function() {
    var vm=this;
	vm.neTreeData = neData;
	vm.mapTreeData = mapData;
	vm.tlTreeData = tlData;
	vm.trailTreeData = trailData;
	vm.pathTreeData = pathData;
	vm.evcTreeData = evcData;
	vm.leftTreeChanged={changed:true};
});  