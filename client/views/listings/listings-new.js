/* jshint camelcase: false */

'use strict';

angular.module('zilo')
.controller('ListingsNewCtrl', function($scope, $state, Listing, Map, Area){
  $scope.create = function(o){
    var listing = new Listing(o);
    var address = [];
    angular.forEach(listing, function(value){
      this.push(value);
    }, address);
    address = address.join(', ');
    Map.geocode(address, function(results){
      console.log('Inside Map.geocode --> results:', results);
      if(results && results.length){
        listing.addrString = results[0].formatted_address;
        listing.lat = results[0].geometry.location.lat();
        listing.lng = results[0].geometry.location.lng();
        var area = new Area(listing);
        area.save()
        .then(function(response){
          $state.go('listings.list');
        });
      }
    });
  };
});
