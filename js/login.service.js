'use strict';

/* Controllers */



angular
    .module('nmsdemoApp')
    .factory('loginService', loginService);
loginService.$inject = ['$http', '$q', '$timeout', 'logger'];
function loginService($http, $q, $timeout, logger) {
    var isLogined = false;
    var username = "";
    var password = "";
    return {
        setUsername: setUsername,
        setPassword: setPassword,
        login: login,
        logout: logout,
        logined: logined
    };

    function setUsername(u) {
        username = u;
        logger.log("setUsername:" + username);
    }
    function setPassword(p) {
        password = p;
        logger.log("setPassword:" + password);
    }
    function login() {
        logger.log("Username:" + username);
        logger.log("Password:" + password);
        
        
        /*return $http.post('/login', { u: username, p: password })
            .then(loginOK)
            .catch(loginKO);*/

        var deferred = $q.defer();
        var promise = deferred.promise;

        $timeout(function () {
            //deferred.resolve({data: 'OK'});
            deferred.reject({data: 'KO'});
        }, 3000);
        
        return promise.then(loginOK)
            /*.catch(loginKO)*/;


        function loginOK(rsp) {
            logger.log("loginOK: " + rsp.data);
            isLogined = true;
            return rsp.data;
        }
        function loginKO(rsp) {
            logger.error("loginKO: " + rsp.data);
            return rsp.data;
        }
    }
    function logout(username) {
        return $http.post('/logout', { u: username })
            .then(logoutOK)
            .catch(logoutKO);
        function logoutOK(rsp) {
            logger.log("logoutOK: " + rsp.data);
            isLogined = false;
            return rsp.data;
        }
        function logoutKO(rsp) {
            logger.error("logoutKO: " + rsp.data);
            return rsp.data;
        }
    }
    function logined() {
        return isLogined;
    }
}

