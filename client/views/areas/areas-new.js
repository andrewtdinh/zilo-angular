'use strict';

angular.module('zilo')
.controller('AreasNewCtrl', function($scope, $state, Area){
  $scope.create = function(o){
    var area = new Area(o);
    area.save()
    .then(function(){
      $state.go('areas.list');
    });
  };
});
