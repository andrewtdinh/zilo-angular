/* jshint camelcase: false */

'use strict';

angular.module('zilo')
.controller('ListingsNewCtrl', function($scope, $state, Listing, Map, Area, $window){
  $scope.create = function(o){
    var listing = new Listing(o);
    var address = [];
    address.push(listing.street);
    address.push(listing.city);
    address.push(listing.state);
    address.push(listing.zip);
    address = address.join(', ');
    Map.geocode(address, function(results){
      console.log('Inside Map.geocode --> results:', results);
      if(results && results.length){
        listing.addrString = results[0].formatted_address;
        listing.lat = results[0].geometry.location.lat();
        listing.lng = results[0].geometry.location.lng();
        listing.photo = $scope.photo;
        var area = new Area(listing);
        area.save()
        .then(function(response){
          console.log('listing: ', response);
          $state.go('listings.list');
        });
      }
    });
  };

  $scope.camOn = function(){
    $scope.webcamOn = true;
    $window.Webcam.set({
      width: 320,
      height: 240,
      destWidth: 640,
      destHeight: 480,
      imageFormat: 'png',
      jpegQuality: 90,
    });
    $window.Webcam.attach('#camera');
    };

  $scope.takeSnapshot = function(){
    $window.Webcam.snap(function(dataUri){
      $scope.photo = dataUri;
      $scope.camOff();
      console.log(dataUri);
    });
  };

  $scope.camOff = function(){
    $scope.webcamOn = false;
    $window.Webcam.reset();
  };
});
