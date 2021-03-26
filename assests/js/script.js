$(document).ready(function () {
  var saveButton = $(".saveBtn");

  var currentDayDisplay = $("#currentDay");

  var today = moment();

  currentDayDisplay.text(today.format("dddd, MMMM Do, YYYY"));

  function changeTime() {
    var currentTime = moment().hours();
    // selecting the time-block class and then begins the functions
    $(".time-block").each(function () {
      // based on the ID of every one of the time-blocks, changes the color of the textbox based on the time of day by setting the class in css
      var timeBlock = parseInt($(this).attr("id"));
      if (timeBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (timeBlock === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
  }
  changeTime();

  setInterval(changeTime, 60000);

  // pulls out the strings saved in local storage and renders them in the places where they were stored
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  // targets every button on the page
  saveButton.on("click", function () {
    // defines the input of each textbox that is a sibling of each saveButton and logs both the ID of it's parent, the div containing everything, and the value of what was inputted into the textbox, the button's sibling
    var textValue = $(this).siblings(".description").val();
    var timeValue = $(this).parent().attr("id");
    // stores the strings defined above and store them in local storage, the time being the key, and text being the value.
    localStorage.setItem(timeValue, textValue);
  });
});
