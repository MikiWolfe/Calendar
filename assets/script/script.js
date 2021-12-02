var buisnessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // array for hours
var currentHour = moment().hour(); // how to know what the current hour is

function displayCurrentDate() {
  var currentDay = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").append(currentDay); // using moment to display the day of the week and date
}

function displayDayPlanner() {
  for (let i = 0; i < buisnessHours.length; i++) {
    let row = $("<div class='row'>");
    let colHr = $("<div class='col-med-1'>");
  

    let hours = buisnessHours[i] + "AM"; // coverting array into hours
    if (buisnessHours[i] >= 12) {
      hours = buisnessHours[i] + "PM";
      if (buisnessHours[i] >= 13) {
        hours = buisnessHours[i] - 12 + "PM";
      }
    }
    let saveBtn = $("<button class = 'btn saveBtn col-md-1'>");
    let textArea= $("<textarea class='col-med-10'>")
    colHr.append(hours);
    row.append(colHr,saveBtn,textArea);
    $(".container").append(row); // appending hours to html
    // $(".row").append(saveBtn);
    // $(".row").append(textArea)
    
  }
}

$(".container").on("click", "button", function saveDay(event) {
  event.target;
});

displayDayPlanner();
displayCurrentDate();

/* text area and append the text area with save button 

Local Storage:
localStorage.setItem("hour-9", "hour 9 text value");
var savedValueForHour = localStorage.getItem("hour-"+ i) */
