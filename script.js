
//Set clicked element as the active class.
$( '.navbar-nav a' ).on( 'click', function ()
 {
   //removes old active element.
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );

  //set clicked element as new active element.
	$( this ).parent( 'li' ).addClass( 'active' );
});
