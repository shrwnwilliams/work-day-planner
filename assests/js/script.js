// DOM Variables
var saveButton = $(".save-button>");
var saveIcon = $(".saveIcon");
var hourOfDayEl = $("#hour-of-day");
var mainContainer = $(".container");
var plannerContent9 = $(".plannerInput-9");
var plannerContent10 = $(".plannerInput-10");
var plannerContent11 = $(".plannerInput-11");
var plannerContent12 = $(".plannerInput-12");
var plannerContent13 = $(".plannerInput-13");
var plannerContent14 = $(".plannerInput-14");
var plannerContent15 = $(".plannerInput-15");
var plannerContent16 = $(".plannerInput-16");
var plannerContent17 = $(".plannerInput-17");
var planner9 = $("#input-9");
var planner10 = $("#input-10")
var planner11 = $("#input-11")
var planner12 = $("#input-12")
var planner13 = $("#input-13")
var planner14 = $("#input-14")
var planner15 = $("#input-15")
var planner16 = $("#input-16")
var planner17 = $("#input-17")

var currentDayDisplay = $("#currentDay");

// maybe advanced listeners for each textarea $("textarea[name='name']")

// var businessHours = [ 9, 10, 11, 12, 13, 14, 15, 16 ,17]

// console.log(businessHours);

var today = moment();
var currentTime = moment().format("H")

currentDayDisplay.text(today.format("dddd, MMMM Do, YYYY"));
// for (var i = 0; i<businessHours.length; i++) {
//     hourOfDayEl.text(businessHours[i]);
// }

function init() {
  renderSavedContent();
  changeTime9();
  changeTime10();
  changeTime11();
  changeTime12();
  changeTime13();
  changeTime14();
  changeTime15();
  changeTime16();
  changeTime17();
  console.log(currentTime);
}

function changeTime9 () {
    if (currentTime > 9){
        planner9.addClass("past");
    } else if (currentTime < 9) {
        planner9.addClass("future");
    } else {
        planner9.addClass("present");
    }
};

function changeTime10 () {
  if (currentTime > 10){
      planner10.addClass("past");
  } else if (currentTime < 10) {
      planner10.addClass("future");
  } else {
      planner10.addClass("present");
  }
};

function changeTime11 () {
  if (currentTime > 11){
      planner11.addClass("past");
  } else if (currentTime < 11) {
      planner11.addClass("future");
  } else {
      planner11.addClass("present");
  }
};

function changeTime12 () {
  if (currentTime > 12){
      planner12.addClass("past");
  } else if (currentTime < 12) {
      planner12.addClass("future");
  } else {
      planner12.addClass("present");
  }
};

function changeTime13 () {
  if (currentTime > 13){
      planner13.addClass("past");
  } else if (currentTime < 13) {
      planner13.addClass("future");
  } else {
      planner13.addClass("present");
  }
};

function changeTime14 () {
  if (currentTime > 14){
      planner14.addClass("past");
  } else if (currentTime < 14) {
      planner14.addClass("future");
  } else {
      planner14.addClass("present");
  }
};

function changeTime15 () {
  if (currentTime > 15){
      planner15.addClass("past");
  } else if (currentTime < 15) {
      planner15.addClass("future");
  } else {
      planner15.addClass("present");
  }
};

function changeTime16 () {
  if (currentTime > 16){
      planner16.addClass("past");
  } else if (currentTime < 16) {
      planner16.addClass("future");
  } else {
      planner16.addClass("present");
  }
};

function changeTime17 () {
  if (currentTime > 17){
      planner17.addClass("past");
  } else if (currentTime < 17) {
      planner17.addClass("future");
  } else {
      planner17.addClass("present");
  }
};

// RE REVIEW EVENT DELEGATION TUESDAY VIDS 7 AND 8

function renderSavedContent() {
  var content9 = localStorage.getItem("plannerContent9");
  plannerContent9.text(content9);

  var content10 = localStorage.getItem("plannerContent10");
  plannerContent10.text(content10);

  var content11 = localStorage.getItem("plannerContent11");
  plannerContent11.text(content11);

  var content12 = localStorage.getItem("plannerContent12");
  plannerContent12.text(content12);

  var content13 = localStorage.getItem("plannerContent13");
  plannerContent13.text(content13);

  var content14 = localStorage.getItem("plannerContent14");
  plannerContent14.text(content14);

  var content15 = localStorage.getItem("plannerContent15");
  plannerContent15.text(content15);

  var content16 = localStorage.getItem("plannerContent16");
  plannerContent16.text(content16);

  var content17 = localStorage.getItem("plannerContent17");
  plannerContent17.text(content17);
}

mainContainer.on("click", function (event) {
  var saveTarget = event.target;

  if (saveTarget.matches("button") || saveTarget.matches("i")) {
    var plannerGoods9 = plannerContent9.val();
    localStorage.setItem("plannerContent9", plannerGoods9);

    var plannerGoods10 = plannerContent10.val();
    localStorage.setItem("plannerContent10", plannerGoods10);

    var plannerGoods11 = plannerContent11.val();
    localStorage.setItem("plannerContent11", plannerGoods11);

    var plannerGoods12 = plannerContent12.val();
    localStorage.setItem("plannerContent12", plannerGoods12);

    var plannerGoods13 = plannerContent13.val();
    localStorage.setItem("plannerContent13", plannerGoods13);

    var plannerGoods14 = plannerContent14.val();
    localStorage.setItem("plannerContent14", plannerGoods14);

    var plannerGoods15 = plannerContent15.val();
    localStorage.setItem("plannerContent15", plannerGoods15);

    var plannerGoods16 = plannerContent16.val();
    localStorage.setItem("plannerContent16", plannerGoods16);

    var plannerGoods17 = plannerContent17.val();
    localStorage.setItem("plannerContent17", plannerGoods17);
  }
});


init();

// var txt2 = $("<p></p>").text("woah");
// $("body").append(txt2);
