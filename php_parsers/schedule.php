<?php
include_once("../php_includes/db_conx.php");
?>
<?php
// REMOVE EVENT
if(isset($_POST["action"]) && $_POST["action"] == "remove_event") {

  $eid = preg_replace('#[^0-9]#', '', $_POST["eid"]);

  $sql = "DELETE FROM schedule WHERE id='$eid' LIMIT 1";
  $query = mysqli_query($db_conx, $sql);

  echo 'event_removed_successfully';
  exit();

}
?>
<?php
// SAVE EVENT
if(isset($_POST["action"]) && $_POST["action"] == "save_event") {

  $name = htmlentities($_POST["name"]);
  $name = mysqli_real_escape_string($db_conx, $name);

  $location = htmlentities($_POST["location"]);
  $location = mysqli_real_escape_string($db_conx, $location);

  $event_date = htmlentities($_POST["date"]);
  $event_date = mysqli_real_escape_string($db_conx, $event_date);

  $event_link = htmlentities($_POST["link"]);
  $event_link = mysqli_real_escape_string($db_conx, $event_link);

  $event_tix = htmlentities($_POST["tickets"]);
  $event_tix = mysqli_real_escape_string($db_conx, $event_tix);

  if($name == "" || $location == "" || $event_date == "") {
    echo "missing_fields";
    exit();
  }

  $sql = "INSERT INTO schedule (name, location, date, event_link, tickets_link, added) VALUES ('$name','$location','$event_date','$event_link','$event_tix',now())";
  $query = mysqli_query($db_conx, $sql);
  $iid = mysqli_insert_id($db_conx);

  echo "event_successfully_added";
  exit();

}

?>
<?php
// LOAD SCHEDULE
if(isset($_POST["action"]) && $_POST["action"] == "get_schedule") {

  $coming_from = htmlentities($_POST["coming_from"]);
  $coming_from = mysqli_real_escape_string($db_conx, $coming_from);

  $sql = "SELECT * FROM schedule WHERE date >= CURDATE() ORDER BY date ASC";
  $query = mysqli_query($db_conx, $sql);

  $numrows = mysqli_num_rows($query);
  if($numrows < 1) { // no upcoming gigs

    $out .= '<div class="">No upcoming events. Stay tuned.</div>';

  } else {

    $out .= '<div class="schedule_row">';
    $out .= '<div style="font-size:25px;font-weight:700;color:black;text-shadow: 1px 1px #4E5893;">Catch us at any of these events.</div>';
    $out .= '</div>';
    while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)) {

      $eid = $row["id"];
      $name = $row["name"];
      $location = $row["location"];
      $event_date = $row["date"];
      $event_link = $row["event_link"];
      $tix_link = $row["tickets_link"];

      if($event_link != "") {
        $link_btn = '<button class="small_button brand_color" onclick="url(\''.$event_link.'\', \'true\')">Event</button>';
      } else {
        $link_btn = '';
      }

      if($tix_link != "") {
        $tix_btn = '<button class="small_button border_button" onclick="url(\''.$tix_link.'\', \'true\')">Tickets</button>';
      } else {
        $tix_btn = '';
      }

      // Format date to friendly date
      $date_obj = strtotime($event_date);
      $date_format = date("D M j", $date_obj);

      $out .= '<div class="schedule_row hover">';
      $out .= '<div class="row">';
      $out .= '<div class="col-md-2 col-xs-12">';
      $out .= ''.$date_format.'';
      $out .= '</div>';
      $out .= '<div class="col-md-4 col-xs-12">';
      $out .= ''.$name.'';
      $out .= '</div>';
      $out .= '<div class="col-md-4 col-xs-12">';
      $out .= ''.$location.'';
      $out .= '</div>';
      $out .= '<div class="col-md-1 col-xs-6">';
      $out .= ''.$tix_btn.'';
      $out .= '</div>';
      $out .= '<div class="col-md-1 col-xs-6">';
      $out .= ''.$link_btn.'';
      $out .= '</div>';
      if($coming_from == "dash") {
        $out .= '<div class="col-md-12 col-xs-12">';
        $out .= '<button class="small_button red" onclick="removeEvent(\''.$eid.'\')">Remove</button>';
        $out .= '</div>';
      }
      $out .= '</div>';
      $out .= '</div>';

    }

  }

  echo $out;
  exit();

}

?>
