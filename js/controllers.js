'use strict';

/* Controllers */



angular
    .module('nmsdemoApp')
    .controller('LoginController', LoginController);
LoginController.$inject=['$state', 'loginService'];
function LoginController($state, loginService) {
    var vm = this;
    vm.username="";
    vm.password="";
    vm.login = login;

    function login() {
        loginService.setUsername(vm.username);
        loginService.setPassword(vm.password);
        $state.go('main');
    }
}

angular
    .module('nmsdemoApp')
    .controller('TreeController', TreeController);
TreeController.$inject=['$state'];
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
    .controller('TreeItemDetailsMiddleController', TreeItemDetailsMiddleController);

TreeItemDetailsMiddleController.$inject=['$stateParams'];
function TreeItemDetailsMiddleController($stateParams) {
    var vm = this;
    vm.message=$stateParams.treeItemName;
}


angular
    .module('nmsdemoApp')
    .controller('TreeItemDetailsOperationController', TreeItemDetailsOperationController);

TreeItemDetailsOperationController.$inject=['$stateParams'];
function TreeItemDetailsOperationController($stateParams) {
    var vm = this;
    vm.message=$stateParams.treeItemName;
}
