trueBlue.service('Override', ['$rootScope', 'DataService', '$localStorage', '$timeout', function($rootScope, DataService, $localStorage, $timeout) {
  this.init = function() {
    // add a "finished" var for overrides. i'm gonna forget about this allllll the time.
    $rootScope.finished = true;
    console.log("init");
  }
}]);
