'use strict';

angular.module('zilo')
.factory('Area', function($http, nodeUrl){

  function Area(obj){
    // this._id = obj._id;
    this.name = obj.name;
    // this.departure = obj.departure;
  }

  // Trip.show = function(tripId){
  //   return $http.get(nodeUrl + '/trips/' + tripId);
  // };
  //
  // Trip.find = function(){
  //   return $http.get(nodeUrl + '/trips');
  // };

  Area.prototype.save = function(){
    return $http.post(nodeUrl + '/areas', this);
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

  return Area;
});
