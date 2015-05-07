'use strict';

angular.module('zilo')
.factory('Area', function($http, nodeUrl){

  function Area(obj){
    this.addrString = obj.addrString;
    this.lat = obj.lat;
    this.lng = obj.lng;
  }


  Area.prototype.save = function(){
    console.log('inside Area prototype save fx')
    return $http.post(nodeUrl + '/listings', this);
  };

  return Area;
});
