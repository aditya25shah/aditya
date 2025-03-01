angular.module('rajnathApp', [])
  .controller('LoginController', function($scope) {
    function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      
      $scope.currentTime = hours + ':' + minutes + ' IST';
      $scope.timezone = '+05:30';
      
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    }
    updateTime();
    setInterval(updateTime, 60000);
    $scope.login = function() {
      console.log('Login attempt with:', $scope.username, $scope.password);
      
    };
  });
