/* 
 * Home Controller.
 */
beeGame.controller("homeController", function ($scope, 
    $translate, $http, Service, $location, 
    $mdDialog, Flash, $anchorScroll, $route,
    $timeout) {

    $scope.phaseIndex = 0;

    $scope.phases = [
      'splash',
      'init',
      'game'
    ];

    $scope.phase = $scope.phases[$scope.phaseIndex];

     $scope.beesGame  = function  () {
          var i;
          $scope.bees = [];
          // 1 Queen Bee
          $scope.bees.push(Service.createBee('queen'));

          // 5 Workers Bees
          for (i = 0; i < 5; i++) {
            $scope.bees.push(Service.createBee('worker'));
          }

          // 5 Workers Bees
          for (i = 0; i < 8; i++) {
            $scope.bees.push(Service.createBee('drone'));
          }
          return $scope.bees;
        }

    $scope.setPhase = function (target) {
      var index = $scope.phases.indexOf(target);
      if (index !== -1) {
        $scope.phaseIndex = index;
        $scope.phase = target;
      }

      //steps
      if (target === 'init') {
        $scope.bees = $scope.beesGame();
        $timeout(function () {
          $scope.nextPhase();
        },1000);
      }
    };

    $scope.setPhase('init');
    // next step
    $scope.nextPhase = function () {
      $scope.phaseIndex++;
      while ($scope.phaseIndex >= $scope.phases.length) {
        $scope.phaseIndex--;
      }
      $scope.setPhase($scope.phases[$scope.phaseIndex]);
    };

    //previous
    $scope.prevPhase = function () {
      $scope.phaseIndex--;
      while ($scope.phaseIndex <= 0) {
        $scope.phaseIndex++;
      }
      $scope.setPhase($scope.phases[$scope.phaseIndex]);
    };

    // Bees control
    $scope.bees = [];



    $scope.getRandomNumber = function () {
      return Math.floor((Math.random() * $scope.bees.length));
    }


    $scope.ramdomHit =  function () {
      var random = $scope.getRandomNumber();
      $scope.beesGame();
      if ($scope.bees[random].lifespan > 0) {
        $scope.bees[random].lifespan = $scope.bees[random].lifespan -
             $scope.bees[random].hitpoints;
        if ($scope.bees[random].lifespan < 0) {
          $scope.bees[random].lifespan = 0;
        }
        if ($scope.bees[random].type === 
                'queen' && $scope.bees[random].lifespan === 0) {
          $scope.setPhase('init');
        }
      } else {
        // if that bee is already dead, get diferent random number
        $scope.ramdomHit();
      }
    }
});
    

