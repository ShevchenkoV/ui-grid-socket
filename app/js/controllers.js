'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope',function($scope) {
      $scope.myData = [
        {
          "firstName": "Cox",
          "lastName": "Carney",
          "company": "Enormo",
          "employed": true
        },
        {
          "firstName": "Lorraine",
          "lastName": "Wise",
          "company": "Comveyer",
          "employed": false
        },
        {
          "firstName": "Nancy",
          "lastName": "Waters",
          "company": "Fuelton",
          "employed": false
        }
      ];
  }])
  .controller('MyCtrl2', [function() {

  }]);
