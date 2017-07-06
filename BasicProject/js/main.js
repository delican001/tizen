var checkTime;

//Initialize function
var init = function () {
    // TODO:: Do your initialization job
    console.log('init() called');
    
    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        }
    });
    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	console.log('Key code : ' + e.keyCode);
    	switch(e.keyCode){
    	case 37: 
    		document.getElementById('but').innerHTML+=' left';
    		break;
    	case 38: //UP arrow
    		document.getElementById('but').innerHTML+=' up';
    		break;
    	case 39: //RIGHT arrow
    		document.getElementById('but').innerHTML+=' right';
    		break;
    	case 40: //DOWN arrow
    		document.getElementById('but').innerHTML+=' down';
    		break;
    	case 13: //OK button
    		document.getElementById('but').innerHTML+=' ok';
    		break;
    	case 10009: 
    		document.getElementById('but').innerHTML+=' RETURN';
		tizen.application.getCurrentApplication().exit();
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}
    });
    function onVolumeChanged(volume) {
    	document.getElementById('volume').innerHTML='volume =' + volume;
		
	}
    tizen.tvaudiocontrol.setVolumeChangeListener(onVolumeChanged);
};
// window.onload can work without <body onload="">
function some_func(file) {
	var vid = document.getElementById('src');
	vid.setAttribute('src', file);
}

var file;

tizen.filesystem.resolve('removable_sda1', function(dir)
        {
		documentsDir = dir;
           dir.listFiles(listFilesOnSuccess, listFilesOnError);
        }, function(e)
        {
           console.log("Error" + e.message);
        }, "rw");

function listFilesOnSuccess(files){
    
    for(var i=0; i<files.length;i++){
        console.log(files[i].name);
        var vid = document.getElementById('src');
    	vid.setAttribute('src', files[i].fullPath);
        $("#tizen-filelist").append("<li id='li"+ i +"'><a id='id"+ i +"' href='#' file-path='"+ files[i].fullPath +"'>"+files[i].name+"</a></li>").listview('refresh');

    }
    console.log(files);
    item_count = $("ul[data-role='listview']").find("a").length;
    console.log("li count = " + item_count);
    
}

function listFilesOnError(){
    console.log("failed");
}

window.onload = function(){
	init();
	vers();
	model();
	ipadress();
	document.getElementById('volume').innerHTML='volume =' + tizen.tvaudiocontrol.getVolume();
}



function ipadress() {
	document.getElementById('ipadress').innerHTML='ipAdress = ' + webapis.network.getIp();
	
}
function model (){
	document.getElementById('model').innerHTML='Model = ' + webapis.productinfo.getModel();
}

function vers() {
    document.getElementById('vers').innerHTML='Version = ' + webapis.productinfo.getVersion();
}

