myApp.service( 'GiphyService', function( $http ){
  var sv = this;

  sv.gimmeARandom = function(){
    console.log( 'in gimmeARandom' );
    var apiUrl = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC';
    return $http.get( apiUrl ).then( function( response ){
      console.log( 'back from $http call with:', response );
      sv.dataWeWant = response.data.data;
    }); //end $http
  }; //end gimmeARandom
});
