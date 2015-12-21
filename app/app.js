var app = angular.module("clickClickGrabApp", ["ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'view/landingPage.html',
        controller: 'LandingPageCtrl'
      })
      .when('/grab', {
        templateUrl: 'view/grab.html',
        controller: 'GrabCtrl'
      })
      .when('/mylist', {
        templateUrl: 'view/browse.html',
        controller: 'BrowseCtrl'
      })
      .when('/browse', {
        templateUrl: 'view/my_list.html',
        controller: 'MyListCtrl'
      })
      ;
  }
]);