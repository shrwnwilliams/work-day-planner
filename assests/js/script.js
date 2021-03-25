// DOM Variables
var saveButton = $('#save-button>');
var hourOfDayEl = $('#hour-of-day');

// var businessHours = [ 9, 10, 11, 12, 1, 2, 3, 4 ,5]

console.log(businessHours);

var currentDayDisplay = $("#currentDay");
var today = moment();

currentDayDisplay.text(today.format("dddd, MMMM Do, YYYY"));

saveButton.on("click", function(){
    alert("good work");
});

for (var i = 0; i<businessHours.length; i++) {
    hourOfDayEl.text(businessHours[i]);

}