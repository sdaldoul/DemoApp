'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        

        $scope.cancelEvent = function() {
            window.location = '/EventDetails.html';
        }

    }
);