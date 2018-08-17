trueBlue.service('Override', ['$rootScope', function($rootScope) {
  this.init = function() {
    console.log("OVERRIDE INIT");
    $rootScope.finished = true;
    // $rootScope.APIpath = "http://localhost.trueblue.guru/api/v1.5/public";
  }
}]);
