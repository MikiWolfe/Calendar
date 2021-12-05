var buisnessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // array for hours
var currentHour = moment().hours(); // how to know what the current hour is

// using moment to display the day of the week and date
function displayCurrentDate() {
  var currentDay = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").append(currentDay);
}

function displayDayPlanner() {
  for (let i = 0; i < buisnessHours.length; i++) {
    let row = $("<div class='row time-block'>");
    let colHr = $("<div class='hour col-med-3'>");
    let hours = buisnessHours[i] + "AM"; // coverting array into hours
    if (buisnessHours[i] >= 12) {
      hours = buisnessHours[i] + "PM";
      if (buisnessHours[i] >= 13) {
        hours = buisnessHours[i] - 12 + "PM";
      }
    }
    var textArea = $("<textarea class= 'description col-sm-10'>");
    var saveBtn = $("<button class = 'btn saveBtn col-sm-1'>");
    colHr.append(hours);
    row.append(colHr, textArea, saveBtn);
    $(".container").append(row); // appending hours to html
  }
}

/*$(".container").on("click", "button", (event) => {
    event.target.localStorage.setItem("#hour-9", ".description");
    console.log(localStorage);
  });
} */

function displayColor() {
  $(".time-block").each(function () {
    if (buisnessHours < currentHour) {
      $(this).addClass("past");
    } else if (buisnessHours === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    console.log(currentHour);
  });
}

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

displayDayPlanner();
displayCurrentDate();
displayColor();
