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
    var lpcb;
    return {
        setUsername: setUsername,
        setPassword: setPassword,
        setLoginProgressCB: setLoginProgressCB,
        loginStep1: loginStep1,
        loginStep2: loginStep2,
        loginStep3: loginStep3,
        loginStep4: loginStep4,
        loginStep5: loginStep5,
        
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
    function setLoginProgressCB(cb) {
        lpcb = cb;
    }





    function login() {
        logger.log("Username:" + username);
        logger.log("Password:" + password);
        if (lpcb) {
            lpcb(true, 40, "用户" + username + "验证中...");
        }


        return $http.post('/login', { u: username, p: password })
            .then(loginOK)
            .catch(loginKO);


        function loginOK(rsp) {
            logger.log("loginOK: " + rsp.data);
            isLogined = true;

            if (lpcb) {
                lpcb(false, 100, "登录成功");
            }
            return rsp.data;
        }
        function loginKO(rsp) {
            logger.error("loginKO: " + rsp.data);
            if (lpcb) {
                lpcb(false, 40, "登录失败");
            }
            return $q.reject(rsp.data);
        }
    }


    function loginStep1() {
        return loginStep("用户" + username + "验证", 1000, 40, 60, true);
    }
    function loginStep2() {
        return loginStep("获取网元列表", 1000, 60, 70, true);
    }
    function loginStep3() {
        return loginStep("获取物理连接和电路", 1000, 70, 80, true);
    }
    function loginStep4() {
        return loginStep("获取以太网电路", 1000, 80, 90, true);
    }
    function loginStep5() {
        return loginStep("获取告警统计", 1000, 90, 99, true);
    }
    
    
    function loginStep(info, dur, startp, endp, ok){
        if (lpcb) {
            lpcb(true, endp, info);
        }

        return step(info, dur, ok)
            .then(function (data) {
                if (lpcb) {
                    lpcb(true, endp, data);
                }
            })
            .catch(function (data) {
                if (lpcb) {
                    lpcb(false, endp, data);
                }
                return $q.reject(data);
            });
    }
    function step(stepname, dur, ok) {
        var defer = $q.defer();
        $timeout(function () {
            if(ok) defer.resolve(stepname + " 成功.")
            else defer.reject(stepname+" 失败.");

        }, dur);
        return defer.promise;
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
            return $q.reject(rsp.data);
        }
    }
    function logined() {
        return isLogined;
    }
}

