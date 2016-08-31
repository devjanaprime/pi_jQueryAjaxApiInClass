console.log( 'ondbapi.js sourced' );
// global search array
var searchResults = [];
$( document ).ready( function(){
  // from spiderman
  console.log( 'bonesaw is ready!!!!!!!!' );

  $( '#searchButton' ).on( 'click', function(){
    console.log( 'in searchButton on click' );
    // get user input
    var movieName = $( '#movieNameIn' ).val();
    console.log( 'searching for:', movieName );
    // omdbapi search url
    // can test the url from console log in Chrome
    var searchURL = 'http://www.omdbapi.com/?s=' + movieName;
    console.log( 'searchURL:', searchURL );
    // ajax call:
    $.ajax({
      url: searchURL,
      dataType: 'JSON',
      success: function( data ){
        console.log( 'ajax success data:', data.Search );
        // store the search results in searchResults
        searchResults = data.Search;
        console.log( 'searchResults:', searchResults );
      } // end success
    }); // end ajax
  }); // end searchButton on click
}); // end doc ready
