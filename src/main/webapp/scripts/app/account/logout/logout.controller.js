'use strict';

angular.module('prevegesApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
