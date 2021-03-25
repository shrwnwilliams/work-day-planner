// DOM Variables
var saveButton = $(".save-button>");
var saveIcon = $(".saveIcon")
var hourOfDayEl = $("#hour-of-day");
var mainContainer = $(".container");
var plannerContent = $(".plannerInput").val('');
var planner9 = $("#9-input")

// var businessHours = [ 9, 10, 11, 12, 1, 2, 3, 4 ,5]

// console.log(businessHours);

// var savedPlannerContent = localStorage.getItem("plannerContent");

// plannerContent.text(savedPlanneContent)

// var userContent = planner9.val()

var currentDayDisplay = $("#currentDay");
var today = moment();

currentDayDisplay.text(today.format("dddd, MMMM Do, YYYY"));

saveButton.on("click", function(){
    alert("good work");
});

// for (var i = 0; i<businessHours.length; i++) {
//     hourOfDayEl.text(businessHours[i]);

// }

mainContainer.on("click", function(event) {
    var saveTarget = event.target;

    if (saveTarget.matches("button") || saveTarget.matches("i")) {
        alert("You pushed a button");
    };
});
