'use strict';

/* Controllers */



angular
    .module('nmsdemoApp')
    .controller('LoginController', LoginController);
LoginController.$inject = ['$state', 'loginService'];
function LoginController($state, loginService) {
    var vm = this;
    vm.username = "";
    vm.password = "";
    vm.loginInprogress = false;
    vm.loginOK = false;
    vm.loginProgress = 100;
    vm.loginStepInfo = "";

    vm.login = login;

    function login() {
        vm.loginInprogress = false;
        vm.loginOK = false;
        vm.loginProgress = 100;
        vm.loginStepInfo = "";

        loginService.setUsername(vm.username);
        loginService.setPassword(vm.password);
        loginService.setLoginProgressCB(loginCB);
        $state.go('main');
    }

    function loginCB(ip, p, m) {
        vm.loginInprogress = ip;
        vm.loginProgress = p;
        vm.loginStepInfo = m;
        vm.loginOK = (p == 100);
    }
}

angular
    .module('nmsdemoApp')
    .controller('TreeController', TreeController);
TreeController.$inject = ['$state'];
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

TreeItemDetailsMiddleController.$inject = ['$stateParams'];
function TreeItemDetailsMiddleController($stateParams) {
    var vm = this;
    vm.message = $stateParams.treeItemName;
}


angular
    .module('nmsdemoApp')
    .controller('TreeItemDetailsOperationController', TreeItemDetailsOperationController);

TreeItemDetailsOperationController.$inject = ['$stateParams'];
function TreeItemDetailsOperationController($stateParams) {
    var vm = this;
    vm.message = $stateParams.treeItemName;
}
