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
function saveTheDay (){
$(".saveBtn").on("click", function () {
  var quest = $(this).sibling(".description").val();
  var hour = $(this).parent().attr("id");
    localStorage.setItem(quest, hour);
})}
saveTheDay()
$("#hour-9 .description").val(localStorage).getItem("hour-9")
