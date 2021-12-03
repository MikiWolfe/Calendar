var buisnessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // array for hours
var currentHour = moment().hour(); // how to know what the current hour is

// using moment to display the day of the week and date
function displayCurrentDate() {
  var currentDay = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").append(currentDay);
}

function displayDayPlanner() {
  for (let i = 0; i < buisnessHours.length; i++) {
    let row = $("<div class='row time-block'>");
    let colHr = $("<div class='col-med-2 hour'>");
    let hours = buisnessHours[i] + "AM"; // coverting array into hours
    if (buisnessHours[i] >= 12) {
      hours = buisnessHours[i] + "PM";
      if (buisnessHours[i] >= 13) {
        hours = buisnessHours[i] - 12 + "PM";
      }
    }
    var textArea = $("<textarea class='col-med-10 description'>");
    var saveBtn = $("<button class = 'btn saveBtn col-md-1'>");
    colHr.append(hours);
    row.append(colHr, textArea, saveBtn);
    $(".container").append(row); // appending hours to html
  }

  $(".container").on("click", "button", function saveDay(event) {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    event.target.localStorage.setItem(time, text);
  });
  }

  function displayColor(){
  $(".time-block").each(function () {
    var timeBlock = 0;
    if (timeBlock < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (timeBlock === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future")
    }
  }); console.log(currentHour)
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
