
var currentHour = moment().hours(); // how to know what the current hour is

// using moment to display the day of the week and date
function displayCurrentDate() {
  var currentDay = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").append(currentDay);
}
displayCurrentDate();
// using the CSS provided so past is grey, present is red and future is green
function displayColor() {
  $(".time-block").each(function () {
    var time = parseInt($(this).attr("id").split("hour")[1]);
    if (time < currentHour) {
      $(this).addClass("past");
    } else if (time === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
displayColor();
function saveTheDay(){

(".button").on("click", "button", (event) => {
    event.target.localStorage.setItem("#hour-9", ".description");
    console.log(localStorage);
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




