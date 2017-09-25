const flightsModule = angular.module('Flights', ['ngMaterial', 'ui.router', 'sidebar', 'results']);

flightsModule.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
			url: '/home',
			views: {
			  // the child views will be defined here (absolutely named)
			  'sideBar@': {
			  	templateUrl: 'templates/sidebar.html', 
          controller: 'SideBarCtrl',
          controllerAs: 'sideBarCtrl'
        },
        'main@': {
          templateUrl: 'templates/results.html', 
          controller: 'ResultsCtrl',
          controllerAs: 'resultsCtrl'
        }
      }
	   });
  });
