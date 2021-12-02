var buisnessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = moment().hour();

 function displayCurrentDate() {
  var currentDay = moment().format("dddd, MMMM Do YYYY");
  currentDay.innerhtml = "currentDay";
} 

function displayDayPlanner() {
  for (let i = 0; i < buisnessHours.length; i++) {
    let row = $("<div class='row'>");
    let colHr = $("<div class='col-sm-2'>");

    let hours = buisnessHours[i] + "AM";
    if (buisnessHours[i] >= 12) {
      hours = buisnessHours[i] + "PM";
      if (buisnessHours[i] >= 13) {
        hours = buisnessHours[i] - 12 + "PM";
      }
    }

    colHr.append(hours);
    row.append(colHr);
    $("#dayPlanner").append(row);
  }
}

// localStorage.setItem( 'hour-9', "hour 9 text value");
displayDayPlanner();
displayCurrentDate();
/* text area and append the text area with save button */
