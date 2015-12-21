var app = angular.module("clickClickGrabApp", ["ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'view/landingPage.html',
        controller: 'LandingPageCtrl'
      })
      // .when('/grab', {
      //   templateUrl: 'view/landingPage.html',
      //   controller: 'LandingPageCtrl'
      // })
      // .when('/mylist', {
      //   templateUrl: 'view/landingPage.html',
      //   controller: 'LandingPageCtrl'
      // })
      // .when('/browse', {
      //   templateUrl: 'view/landingPage.html',
      //   controller: 'LandingPageCtrl'
      // })
      ;
  }
]);