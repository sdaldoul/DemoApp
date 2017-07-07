'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style ="color:red"> hi there <span/>';
        $scope.boolValue = true;
        $scope.sortorder = 'name';
        $scope.buttonDisabled = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.event = {

            name : 'Angular js 3',
            date : '1/1/2013',
            time : '10:30 am',
            location : {

                adress : 'google paris',
                city : 'Nanterre',
                province : 'PR'
            },
            imageUrl : '/img/angularjs-logo.png',
            sessions : [

                {
                    name : 'Directive',
                    creatorName : 'daldoul',
                    duration : 'ada',
                    level: 'advanced',
                    abstract : 'azdaz',
                    upVoteCount :0
    },
                {
                    name : 'scopa',
                    creatorName : 'daldoul',
                    duration : 'ada',
                    level: 'adazd',
                    abstract : 'azdaz',
                    upVoteCount :0
                },
                {
                    name : 'Directive',
                    creatorName : 'daldoul',
                    duration : 'ada',
                    level: 'adazd',
                    abstract : 'azdaz',
                    upVoteCount :0
                }
            ]
        }
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