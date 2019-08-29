function _(x) {
	return document.getElementById(x);
}
function _class(x) {
	return document.getElementsByClassName(x);
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function isMobileView() {
	var w = window.innerWidth;
	if(w <= 980) {
		return true;
	} else {
		return false;
	}
}
function url(link, newWindow) {
	if(newWindow) {
		let handle = window.open(link);
		handle.blur();
		window.focus();
	} else {
		window.location = link;
	}
}
function scrollMenu() {
    var winHeight = window.innerHeight;
    var docHeight = document.body.scrollHeight;
    var yPos = window.pageYOffset;
		var elem = _("main_bg_media");
		var cont = _("main_container");
		if(cont != null) {
			if(yPos > 15) {
					_("menu").setAttribute('style', 'top:0px;box-shadow:1px 2px 10px -2px rgba(0,0,0,0.2);');
	        //elem.setAttribute('style', 'filter:blur(5px);');

	    } else {
					_("menu").setAttribute('style', 'top:-50px;box-shadow:none;');
	        //elem.setAttribute('style', 'filter:blur(0px);');

	    }
		}
}
window.addEventListener("scroll", scrollMenu);

function square() {
  var container = _("gallery").offsetWidth;
  var isMobile = isMobileView();
  if(isMobile) {
    var pic_w = (container / 2) - 10;
  } else {
    var pic_w = (container / 3) - 80;
  }
  var imgs = _class("media_tile");
  //var img_container = _class("media_tile_container");
  for(var i = 0; i < imgs.length; i++) {
    imgs[i].style.width = ""+pic_w+"px";
    imgs[i].style.height = ""+pic_w+"px";

  }
}
