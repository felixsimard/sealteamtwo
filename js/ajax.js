function ajaxObj( meth, url ) {
	var x = new XMLHttpRequest();
	x.open( meth, url, true );
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//x.setRequestHeader("Access-Control-Allow-Origin", "https://katnco.ca", "Content-type", "application/x-www-form-urlencoded");
	//x.withCredentials = false;
	return x;
}
function ajaxReturn(x){
	if(x.readyState == 4 && x.status == 200){
		return true;
	}
}

/*----- Custom HTTP Request function ----*/
function httprequest(url, action, data, callback) {
	var ajax = ajaxObj("POST", url);
	ajax.onreadystatechange = function() {
		if(ajaxReturn(ajax) == true) {
			var res = ajax.responseText.trim();
			if(res == ""){
				status("Error for action: " + action, "black");
			} else {
				callback(res);
			}
		}
	}
	ajax.send("action="+action+"&"+data+"");
}
/*----------------------------------------*/
