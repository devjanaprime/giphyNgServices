var myApp = angular.module( 'myApp', [] );

myApp.controller( 'GiphyController', function(){
  var vm = this;

  vm.getRandom = function(){
    console.log( 'in getRandom' );
    // get a random image from GiphyService.gimmeARandom
    // display the random image on DOM
  }; // end getRandom
}); // end GiphyController
