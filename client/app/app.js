var Shellenge = angular.module('poke', ['ui.router', 'ui.bootstrap', 'poke.directives', 'poke.services']);

Shellenge.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.useApplyAsync(true);
    $httpProvider.defaults.timeout = 5000;

    $urlRouterProvider.otherwise("/page-not-found");
    $stateProvider
        .state('landing', { url: '', template: 'Landing page' })
    ;
}]);

angular.module('poke.directives', []);
angular.module('poke.services', []);