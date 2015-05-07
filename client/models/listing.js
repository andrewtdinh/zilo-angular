'use strict';

angular.module('zilo')
.factory('Listing', function($http, nodeUrl){

  function Listing(obj){
    this.street = obj.street;
    this.city = obj.city;
    this.state = obj.state;
    this.zip = obj.zip;
    this.photo = obj.photo;
    this.price = obj.price;
    this.beds = obj.beds;
    this.baths = obj.baths;
    this.sqft = obj.sqft;
    // this.departure = obj.departure;
  }

  // Trip.show = function(tripId){
  //   return $http.get(nodeUrl + '/trips/' + tripId);
  // };
  //
  // Trip.find = function(){
  //   return $http.get(nodeUrl + '/trips');
  // };

  Listing.prototype.save = function(){
    return $http.post(nodeUrl + '/listings', this);
  };

  // Trip.prototype.destroy = function(){
  //   return $http.delete(nodeUrl + '/trips/' + this._id);
  // };
  //
  // Trip.prototype.destroyStop = function(stop){
  //   return $http.delete(nodeUrl + '/trips/' + this._id + '/stops/' + stop._id);
  // };
  //
  // Trip.prototype.addStop = function(stop){
  //   return $http.post(nodeUrl + '/trips/' + this._id + '/stops', stop);
  // };

  return Listing;
});
