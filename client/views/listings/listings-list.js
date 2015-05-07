'use strict';

angular.module('zilo')
.controller('AreasListCtrl', function($scope, $window, Area){
  Area.find()
  .then(function(response){
    $scope.areas = response.data.areas;
  });

  $scope.destroy = function(obj){
    var area = new Area(obj);
    area.destroy()
    .then(function(response){
      $window._.remove($scope.areas, function(t){
        return t._id === response.data._id;
      });
    });
  };
});
