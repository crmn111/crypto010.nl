(function() {
  'use strict';

  angular
    .module('crypto010')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$timeout, hotkeys) {
    var vm = this;

    vm.tomoon = false;
    vm.rockmoon = false;
    vm.showegg = false;
    vm.twitter = false;
    vm.meetup = true;


    hotkeys.add({
      combo: 'ctrl+j',
      description: 'This one goes to 11',
      callback: function() {
        vm.showegg = !vm.showegg;
      }
    });


    hotkeys.add({
      combo: 'ctrl+k',
      callback: function() {
        $scope.onReady();
      }
    });


    $scope.onReady = function() {

        vm.tomoon = true;

        $timeout(function(){

          vm.rockmoon = true;
        },10000);

    };
  }
})();
