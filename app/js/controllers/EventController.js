'use strict';

eventsApp.controller('EventController',
    function EventController($scope , eventData) {
        $scope.snippet = '<span style ="color:red"> hi there <span/>';
        $scope.boolValue = true;
        $scope.sortorder = 'name';
        $scope.buttonDisabled = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.event = eventData.event;
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