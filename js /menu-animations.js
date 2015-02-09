$( ".toggle" ).click(function() {
  $( '#barOne' ).toggleClass( "left" );
  $( '#barTwo' ).toggleClass( "right" );
  $( '#barThree' ).toggleClass( "down" );
  $( '.close' ).toggleClass( "closeUp" );
  $( '.bar ul' ).toggleClass( "height" );
});