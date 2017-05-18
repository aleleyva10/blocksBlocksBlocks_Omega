$( document ).ready( function(){
  console.log( 'JQ' );
  // click handler for addBlockButton
  $( '#addBlockButton' ).on( 'click', function(){
    console.log( 'in addBlockButton on click' );
    // append a block to DOM
    var appendString = "<div class='blocky ";
    // with a random color
    var rando = Math.random() * 100;
    console.log( 'rando:', rando);
    if( rando < 10 ){
      appendString += 'red';
    }
    else if( rando < 20 ){
      appendString += 'orange';
    }
    else if( rando < 30 ){
      appendString += 'yellow';
    }
    else if( rando < 40 ){
      appendString += 'green';
    }
    else if( rando < 50 ){
      appendString += 'blue';
    }
    else if( rando < 60 ){
      appendString += 'indigo';
    }
    else if( rando < 70 ){
      appendString += 'violet';
    }
    else {
      appendString += 'badass';
    }
    appendString += "' ";
    appendString += 'style="height: ' + Math.random() * 300 + 'px; width: ' + Math.random() * 300 + 'px;"';
    appendString +="><p class='deleteMyParent'>x</p></div>";
    // append string when DONE
    console.log( 'appending:', appendString );
    $( '#outputDiv' ).append( appendString );
  });

  $( '#randomSizeButton' ).on( 'click', function(){
    console.log( 'randomSizeButton on click' );
    // target boxes, class of "blocky"
    console.log( $( '.blocky' ) );
    var randomHeight =  ( Math.random() * 100 ) + 'px';
    $( '.blocky' ).css( 'height', randomHeight)
    var randomWidth =  ( Math.random() * 100 ) + 'px';
    $( '.blocky' ).css( 'width', randomWidth)
    // change size
  }); //end randomSizeButton on click

  $( '#outputDiv' ).on( 'click', '.blocky', function(){
    console.log( 'blocky class on click' );
    // paint it black
    $( this ).css( 'background-color', 'black' );
  }); // end on click for blockies class on document

  $( '#outputDiv' ).on( 'click', '.deleteMyParent', function(){
    console.log( 'in blocky click deleteMyParent' );
    // delete parent of x clicked
    $( this ).parent().remove()
  }); //end deleteMyParent click in blocky

}); //end doc ready
