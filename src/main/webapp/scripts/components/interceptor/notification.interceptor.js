 'use strict';

angular.module('prevegesApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-prevegesApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-prevegesApp-params')});
                }
                return response;
            },
        };
    });