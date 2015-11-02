angular.module('multiview')
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('/', {
        templateUrl: 'templates/lists.html',
        controller: 'ionSideMenus'
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
})