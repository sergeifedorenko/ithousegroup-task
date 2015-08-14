angular.module('starter.services', [])
  .service('backend', function ($http) {
    var self = {}, rootUrlApiv0 = 'http://0.0.0.0:3000/api/';

    self.getProducts = function () {
      return $http.get(rootUrlApiv0 + 'products');
    }

    self.getProduct = function (id) {
      return $http.get(rootUrlApiv0 + 'products/' + id);
    }

    self.setProduct = function (obj) {
      console.info(obj);
      return $http.put(rootUrlApiv0 + 'products/', obj);
    }

    return self;
  })
;
