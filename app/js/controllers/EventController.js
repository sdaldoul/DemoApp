'use strict';

eventsApp.controller('EventController',
    function EventController($scope , eventData , $log) {
        $scope.snippet = '<span style ="color:red"> hi there <span/>';
        $scope.boolValue = true;
        $scope.sortorder = 'name';
        $scope.buttonDisabled = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";

        eventData.getEvent().success(function(event) {$scope.event = event;})
            .error(function (data,status,header,config) {
            $log.warn(data,status,header,config);
        });

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession =  function(session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }

    }
);