eventsApp.factory('eventData', function() {
    return {

        event :{



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
                    duration : 1,
                    level: 'advanced',
                    abstract : 'azdaz',
                    upVoteCount :0
                },
                {
                    name : 'scopa',
                    creatorName : 'daldoul',
                    duration : 2,
                    level: 'adazd',
                    abstract : 'azdaz',
                    upVoteCount :0
                },
                {
                    name : 'Directive',
                    creatorName : 'daldoul',
                    duration : 4,
                    level: 'adazd',
                    abstract : 'azdaz',
                    upVoteCount :0
                }
            ]
    }

    };
});