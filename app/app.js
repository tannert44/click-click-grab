var app = angular.module("clickClickGrabApp", ["ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/landingPage.html',
        controller: 'SidebarCtrl'
      });
  }
]);