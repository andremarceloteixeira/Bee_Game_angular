

/**
 * Service for get all web service data!
 */
beeGame.service("Service", function ($http, $location, Flash, $translate) {

    return {
       
    createBee : function (type) {
      switch (type) {
        case 'queen':
          return {
            'type': type,
            'maxlifespan': 100,
            'lifespan': 100,
            'hitpoints': 8,
            'color': "yellow"
          };
        case 'worker':
          return {
            'type': type,
            'maxlifespan': 75,
            'lifespan': 75,
            'hitpoints': 10,
            'color': "red"
          };
        case 'drone':
          return {
            'type': type,
            'maxlifespan': 50,
            'lifespan': 50,
            'hitpoints': 12,
            'color': "green"
          };
        default:
          throw new Error('No type of bee specified');
      }
    },
    }
});
