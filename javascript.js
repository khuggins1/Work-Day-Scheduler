var header = document.header;
const m = moment();
var m2 = m.format("dddd, MMM Do YYYY");
$(currentDay).text(m2)

$('.timeBlock').each(function(){
    let currentTime = moment().hours();
    let currentHour = Number(currentTime);
    let timeId = $(this).children("div").children("p").attr("id");
    let taskTime = Number(timeId);
    if(taskTime < currentHour){
        $(this).children("textarea").addClass("past");
    }
    else if(taskTime === currentHour) {
        $(this).children("textarea").addClass("present");
    }
    else {
        $(this).children("textarea").addClass("future");
    }
});