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
                window.history.back();
            }
        }
    } );
     change_text();
} () );


function button1_func(){
	alert(window.innerWidth + " " + window.innerHeight);
}

var flag=false;
var ishidden=false;
function button2_func(){
	
	var img=document.createElement("IMG");
	var name="images/img.jpg";
	img.setAttribute("src",name);
	//img.setAttribute("width","160");
	//img.setAttribute("height","200");
	//img.setAttribute("id", "img")
	img.setAttribute("alt","img");
	if (!flag)
	{
		document.getElementById("div_one").appendChild(img);
		flag=true;
	}
	else if (!ishidden) {
			$("img").hide();
			ishidden=true;
	}
}

function change_text(){
	$("#text").css("color","red");
}

function anime(){

	var canvas = document.getElementById("circle");
    var obCanvas = canvas.getContext("2d");    
    obCanvas.beginPath();
    var x=1;
    setInterval(function() {
    
    obCanvas.arc(15*x, 75*x, 10, 0, 2*Math.PI, false);
    obCanvas.fillStyle = "red";
    obCanvas.fill();
    obCanvas.lineWidth = 1;
    obCanvas.strokeStyle = "red";
    obCanvas.stroke();
    x=x+0.1;    
    },1000);
}

function check (){
	var canvas = document.getElementById("check");
	var ob = canvas.getContext("2d");
	var flag=true;
	var x=0;
	var y=0;
	for (var i=0;i<8;i++)
		{
		x=0;
		for (var j=0;j<8;j++)
			{
			if (flag)
				{
				ob.fillStyle="white";
				flag=!flag;
				}
				else
					{
					ob.fillStyle="black";
					flag=!flag;
					}
			ob.fillRect(x,y,20,20);
			x=x+20;
			}
		y=y+20;
		if (flag)
		{
		ob.fillStyle="white";
		flag=!flag;
		}
		else
			{
			ob.fillStyle="black";
			flag=!flag;
			}
		}
}
