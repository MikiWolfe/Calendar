var buisnessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// var currentHour = moment().hour();

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
    console.log(hours);

    colHr.append(hours)


    row.append(colHr);
    $('#dayPlanner').append(row);
  }
}

displayDayPlanner();
/* text area and append the text area with save button