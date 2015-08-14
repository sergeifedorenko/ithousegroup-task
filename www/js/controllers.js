angular.module('starter.controllers', [])

  .controller('ProductsCtrl', function ($scope, backend) {
    var pagingForFuture = false;

    backend.getProducts().then(function (response) {
      $scope.list = response.data;
      //pagingForFuture = response.data.sameObject;
    });
  })

  .controller('ProductCtrl', function ($scope, backend, $state) {
    console.info('ProductCtrl - ', $state.params);

    if ($state.params.productId) {
      backend.getProduct($state.params.productId).then(function (response) {
        $scope.product = response.data;
      }, function () {
        // show error
      });
    }
    else {
      $scope.isNewProduct = true;
      $scope.product = {};
    }

    $scope.save = function () {
      backend.setProduct($scope.product).then(function (response) {
        console.info(response);
        $state.go('tab.products');
        //$state.go('tab.product', {productId: response.data.id});
      }, function () {
        // show error
      });

    }
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      workOffline: true
    };
  });
