var myApp = angular.module( 'myApp', [] );

myApp.controller( 'GiphyController', function( GiphyService ){
  var vm = this;

  vm.getRandom = function(){
    console.log( 'in getRandom' );
    // call GiphyService.gimmeARandom
    GiphyService.gimmeARandom();
    // display output on DOM
  }; // end getRandom
}); // end GiphyController
