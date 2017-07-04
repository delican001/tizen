window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });


};

function button1_func(){
	alert(window.innerWidth + " " + window.innerHeight);
}

var flag=false;
function button2_func(){
	
	var img=document.createElement("IMG");
	var name="images/img.jpg";
	img.setAttribute("src",name);
	img.setAttribute("width","160");
	img.setAttribute("height","200");
	img.setAttribute("alt","img");
	if (!flag){
		document.body.appendChild(img);
	flag=true;
	}
	else
		{
		document.removeChild(img);
		flag=false;
		}
}