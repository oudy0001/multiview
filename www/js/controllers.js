angular.module('multiview')
.controller('ionSideMenus', function($scope, $ionicSideMenueDelegate){
    $scope.toggleMenue = function(){
        alert('hi');
        $ionicSideMenueDelegate.toggleLeft();
    }
    
});