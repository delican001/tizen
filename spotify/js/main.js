var access_token;
var refresh_token;
function jsonpObtainer(data){
    var temp=JSON.parse(data);
    access_token = temp.token;
    refresh_token = temp.refreshToken;
    console.log(temp.token);
    console.log(temp.refreshToken);
    };
function reg_please() {
		alert("PASHEL NAHOOY");
		window.location.href = 'https://www.facebook.com/v2.3/dialog/oauth?client_id=174829003346&state=AQCArvIHebrWF0mt26tWAt9TZPa42aG_ZdfdFvaSSf4VSoezpj9TkLO9JSF-WqC4evPciYgu43SuSD4&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Fapi%2Ffacebook%2Foauth%2Faccess_token';
		}
(function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
            	console.log("pressed");
               window.open("index.html");
            }
        }
    } );
} () );
                
                
                