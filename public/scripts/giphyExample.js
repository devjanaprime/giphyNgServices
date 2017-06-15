var myApp = angular.module( 'myApp', [] );

myApp.controller( 'GiphyController', function( GiphyService ){
  var vm = this;

  vm.getRandom = function(){
    console.log( 'in getRandom' );
    // call GiphyService.gimmeARandom
    GiphyService.gimmeARandom().then( function(){
      console.log( 'back in controller' );
      vm.theGoodStuff = GiphyService.dataWeWant;
      console.log( 'data from Service:', vm.theGoodStuff );
      // display output on DOM
    }); // end service function call
  }; // end getRandom
}); // end GiphyController
