'use strict';

angular.module('zilo')
.factory('Area', function($http, nodeUrl){

  function Area(obj){
    this.addrString = obj.addrString;
    this.lat = obj.lat;
    this.lng = obj.lng;
    this.photo = obj.photo;
    this.price = obj.price;
    this.beds = obj.beds;
    this.baths = obj.baths;
    this.sqft = obj.sqft;
  }


  Area.prototype.save = function(){
    console.log('inside Area prototype save fx')
    return $http.post(nodeUrl + '/listings', this);
  };

  return Area;
});
