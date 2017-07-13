var access_token;
var refresh_token;
function jsonpObtainer(data){
    var temp=JSON.parse(data);
    access_token = temp.token;
    refresh_token = temp.refreshToken;
    console.log(temp.token);
    console.log(temp.refreshToken);
    };
( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                	console.log("a");
                
                $.ajax({
                  dataType: "jsonp",
                  crossDomain : true,
                  url: "http://egeshki.ru/spotify/",
                  success: function(response){
                  jsonpObtainer(response);
                  }
                });
                } catch (ignore) {
                }
            } else {
            	
            	console.log("a");
            	window.location.href="#one";
                function jsonpObtainer(data){
                var temp=JSON.parse(data);
                access_token = temp.token;
                refresh_token = temp.refreshToken;
                console.log(temp.token);
                console.log(temp.refreshToken);
                };
                $.ajax({
                  dataType: "jsonp",
                  crossDomain : true,
                  url: "http://egeshki.ru/spotify/",
                  success: function(response){
                  jsonpObtainer(response);
                  }
                });
            }
        }
    } );
} () );
        	