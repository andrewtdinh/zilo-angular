/* jshint camelcase: false */

'use strict';

angular.module('zilo')
.controller('ListingsShowCtrl', function($scope, $state, $window, Listing, Map){
  var listingId = $state.params.listingId;
  var map;
  // var markers = [];
  Listing.show(listingId)
  .then(function(response){
    $scope.listing = response.data.listing[0];
    map = Map.create('#showPageMap', $scope.listing.lat, $scope.listing.lng, 15);
    addMarkers($scope.listing);
    console.log('$scope.listing: ', $scope.listing);
  });

  function addMarkers(s){
    // clearMarkers();
    // markers = $scope.listings.map(function(s){
    Map.addMarker(map, s.lat, s.lng, s.name, '/assets/house.png');
    // });
  }

  // Area.show($state.params.areaId)
  // .then(function(response){
  //   $scope.area = response.data;
  //   addMarkers();
  // });
  //
  // $scope.create = function(stop){
  //   Map.geocode(stop.name, function(results){
  //     if(results && results.length){
  //       house.name = results[0].formatted_address;
  //       house.lat = results[0].geometry.location.lat();
  //       house.lng = results[0].geometry.location.lng();
  //       var area = new Area($scope.area);
  //       area.addHouse(house)
  //       .then(function(response){
  //         $scope.area = response.data;
  //         addMarkers();
  //       });
  //     }
  //   });
  // };
  //
  // $scope.destroy = function(house){
  //   var area = new Area($scope.area);
  //   area.destroyHouse(house)
  //   .then(function(response){
  //     $window._.remove($scope.trip.houses, function(s){
  //       return s._id === response.data.houseId;
  //     });
  //     addMarkers();
  //   });
  // };
  //
  // var map = Map.create('#map', 37.5483, -100.9886, 4);
  // var markers = [];
  //
  // function addMarkers(){
  //   clearMarkers();
  //   markers = $scope.trip.houses.map(function(s){
  //     return Map.addMarker(map, s.lat, s.lng, s.name, '/assets/house.png');
  //   });
  // }
  //
  // function clearMarkers(){
  //   markers.forEach(function(m){
  //     m.setMap(null);
  //   });
  //   markers = [];
  // }
});
