'use strict';

/* Controllers */



angular
    .module('nmsdemoApp')
    .controller('TreeController', ['$state', TreeController]);

function TreeController($state) {
    var vm = this;
    vm.neTreeData = neData;
    vm.mapTreeData = mapData;
    vm.tlTreeData = tlData;
    vm.trailTreeData = trailData;
    vm.pathTreeData = pathData;
    vm.evcTreeData = evcData;
    vm.leftTreeChanged = { changed: true };
    vm.treeItemClicked = treeItemClicked;

    function treeItemClicked(itemName) {
        $state.go('main.treeitem', { treeItemName: itemName });
    };
}

angular
    .module('nmsdemoApp')
    .controller('TreeItemDetailsController', ['$stateParams', TreeItemDetailsController]);

function TreeItemDetailsController($stateParams) {
    var vm = this;
    vm.message=$stateParams.treeItemName;
    //vm.message='bbb';
}