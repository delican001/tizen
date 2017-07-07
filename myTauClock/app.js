(function () {
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageid = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageid = page ? page.id : "";

			if (pageid === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());
window.onload=function (){
	if (tizen.alarm.getAll()>0)
		navigator.vibrate(5000);
};

function qwe () {
	
	var cock = document.getElementById("timefield").value;
	
	var year =tizen.time.getCurrentDateTime().getFullYear();
	var month = tizen.time.getCurrentDateTime().getMonth();
	var day = tizen.time.getCurrentDateTime().getDay();
	var hour = Number(cock[0]+cock[1]);
	var minute = Number(cock[3]+cock[4]);
	var second = Number(cock[6]+cock[7]);
	var _second = second+10;
	console.log(year);
	console.log(month);
	console.log(day+2);
	console.log(hour);
	console.log(minute);
	console.log(second);
	console.log(_second);
	var _date = new Date (year,month,day,hour,minute,_second);
	var date = new Date (year,month,day,hour,minute,second);
	var _alarm = new tizen.AlarmAbsolute(_date);
	var alarm = new tizen.AlarmAbsolute(date);
	var appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/view");
	tizen.alarm.add(alarm, tizen.application.getCurrentApplication().appInfo.id, appControl);
	
	
}
