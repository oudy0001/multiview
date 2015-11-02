angular.module('multiview')
.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/lists.html',
        controller: 'ionSideMenus'
    })
    .otherwise({redirectTo: '/'})
})