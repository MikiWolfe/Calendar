var currentHour = moment().hour(); // how to know what the current hour is
$(document).ready(function () {
  // using moment to display the day of the week and date

  var currentDay = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").append(currentDay);

  // using the CSS provided so past is grey, present is red and future is green

  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlock < currentHour) {
      $(this).addClass("past");
    } else if (timeBlock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).addClass("future");
    } 
  });

  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var quest = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, quest);
  });

});
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

$(".btn-danger").on("click", function () {
  localStorage.clear();
});
