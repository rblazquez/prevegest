'use strict';

angular.module('prevegesApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


