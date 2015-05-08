'use strict';

angular.module('zilo')
.controller('ListingsListCtrl', function($scope, $window, Area, Map){
  var map;
  Area.find()
  .then(function(response){
    $scope.listings = response.data.listings;
    $scope.centerLat = getMeanLat($scope.listings);
    $scope.centerLng = getMeanLng($scope.listings);
    console.log('listings: ', $scope.listings);
    map = Map.create('#listingMap', $scope.centerLat.toFixed(4), $scope.centerLng.toFixed(4), 7);
    addMarkers();
  });

  // var map = Map.create('#listingMap', 37.5483, -100.9886, 4);

  var markers = [];
  function addMarkers(){
    clearMarkers();
    markers = $scope.listings.map(function(s){
      return Map.addMarker(map, s.lat, s.lng, s.name, '/assets/house.png');
    });
  }

  function clearMarkers(){
    markers.forEach(function(m){
      m.setMap(null);
    });
    markers = [];
  }

  function getMeanLat(listings){
    return listings.reduce(function(prev, curr){
      return prev + curr.lat;
    }, 0)/ listings.length;
  }

  function getMeanLng(listings){
    return (listings.reduce(function(prev, curr){
      return prev + curr.lng;
    }, 0)/ listings.length);
  }
  //
  // $scope.destroy = function(obj){
  //   var area = new Area(obj);
  //   area.destroy()
  //   .then(function(response){
  //     $window._.remove($scope.areas, function(t){
  //       return t._id === response.data._id;
  //     });
  //   });
  // };
});
