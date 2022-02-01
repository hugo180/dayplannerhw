var saveBtn = $(".saveBtn");
timeBlockColor();
Planner();
// current day is displayed at the top of the calendar.
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Blocks colors start here 
function timeBlockColor() {
    var hour = moment().hours(); 
    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// Save btn starts here...
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
});

//  the text is saved in local storage...
function Planner() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);
        if(currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan);
        }
    });
}

