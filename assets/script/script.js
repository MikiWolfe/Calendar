var currentHour = moment().hour(); // how to know what the current hour is
$(document).ready(function () {
  // using moment to display the day of the week and date

  var currentDay = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").append(currentDay);

  // using the CSS provided so past is grey, present is red and future is green

  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id").split("-")[1];
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
   var quest= $(this).siblings(".description").val();
   var time =$(this).parent().attr("id");
   console.log(this)
    localStorage.setItem(time, quest);
  });

  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
});
