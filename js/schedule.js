function loadSchedule(coming_from) {
  var data = "coming_from="+coming_from;
  if(coming_from == "dash") {
    var endpoint = "../php_parsers/schedule.php";
  } else {
    var endpoint = "php_parsers/schedule.php"
  }
	httprequest(endpoint, "get_schedule", ""+data+"", function(res) {
		if(res.trim() != "") {
      _("schedule_list").innerHTML = res.trim();
      if(coming_from == "dash") {
        //status("Schedule loaded.");
      }
		} else {
			status("Error loading schedule. Please try again later.", "black");
		}
	});
}
function saveEvent() {
  var name = _("event_name").value.trim();
  var location = _("event_location").value.trim();
  var year = _("event_date_year").value.trim();
  var month = _("event_date_month").value.trim();
  var day = _("event_date_day").value.trim();
  var event_link = _("event_event_link").value.trim();
  var event_tix = _("event_tickets_link").value.trim();
  if(name == "" || location == "" || year == "" || month == "" || day == "") {
    status("Fill in all the fields.", "black");
    return false;
  } else {
    var event_date = ""+year+"-"+month+"-"+day+" 00:00:00";
    var data = "name="+name+"&location="+location+"&date="+event_date+"&link="+event_link+"&tickets="+event_tix;
    httprequest("../php_parsers/schedule.php", "save_event", ""+data+"", function(res) {
      if(res.trim() != "missing_fields") {

        status("Event added successfully.");
        window.setTimeout(function() {
          window.location.reload();
        }, 1500);
      } else {
        status("Error adding event. Please try again later.", "black");
      }
    });
  }
}
function removeEvent(eid) {
  console.log(eid)
  if(eid == "") {
    status("No event passed, cannot delete it.", "black");
  } else {
    var data = "eid="+eid;
    httprequest("../php_parsers/schedule.php", "remove_event", ""+data+"", function(res) {
      status("Event removed.");
      window.setTimeout(function() {
        window.location.reload();
      }, 1500);
    });
  }
}
