// Main module for the shelterApp, and ng-map module.

var app = angular.module('shelterApp', ['ngMap']);

// Map Module - pre-defined by ng-maps. 
angular.module('ngMap').run(function($rootScope, NgMap) {
  NgMap.getMap().then(function(map,crd) {
    $rootScope.map = map;
  });
});
