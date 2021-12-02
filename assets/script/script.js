var buisnessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // array for hours
var currentHour = moment().hour(); // how to know what the current hour is 


function displayCurrentDate() {
  var currentDay = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").append(currentDay); // using moment to display the day of the week and date
}

function displayDayPlanner() {
  for (let i = 0; i < buisnessHours.length; i++) {
    let row = $("<div class='row'>");
    let colHr = $("<div class='col-sm-2'>");

    let hours = buisnessHours[i] + "AM"; // coverting array into hours
    if (buisnessHours[i] >= 12) {
      hours = buisnessHours[i] + "PM";
      if (buisnessHours[i] >= 13) {
        hours = buisnessHours[i] - 12 + "PM";
      }
    }
    colHr.append(hours);
    row.append(colHr);
    $(".container").append(row); // appending hours to html
  }
  function hourPlan() {
    for (let i = 0; i < currentHour.length; index++) {
      let = $("<div id ='hour-9' class= 'row time-block past'>");
    }
  }
}

$('.container').on('click','button', function saveDay(event){
 (event.target)
})

displayDayPlanner();
displayCurrentDate();



/* text area and append the text area with save button 

Local Storage:
localStorage.setItem("hour-9", "hour 9 text value");
var savedValueForHour = localStorage.getItem("hour-"+ i) */