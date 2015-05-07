'use strict';

angular.module('zilo')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('profile', {url: '/profile', templateUrl: '/views/users/profile.html', controller: 'ProfileCtrl'})
  .state('areas', {url: '/areas', templateUrl: '/views/areas/areas.html', abstract: true})
  .state('areas.new', {url: '/new', templateUrl: '/views/areas/areas-new.html', controller: 'AreasNewCtrl'})
  .state('areas.list', {url: '/', templateUrl: '/views/areas/areas-list.html', controller: 'AreasListCtrl'})
  .state('areas.show', {url: '/{areaId}', templateUrl: '/views/areas/areas-show.html', controller: 'AreasShowCtrl'});
});
