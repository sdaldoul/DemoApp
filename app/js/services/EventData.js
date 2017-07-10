eventsApp.factory('eventData', function($http) {
    return {

        getEvent : function () {
           return $http({methode : 'GET', url: 'data/event/1'});
        }

    };
});