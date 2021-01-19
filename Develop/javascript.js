var header = document.header;
const now = moment();
var m = now.format("dddd, MMM Do YYYY hh:mm:ss");
$(currentDay).text(m)

$('.timeBlock').each(function(){
    let currentTime = moment().hours();

    let currentHour = Number(currentTime);

    let timeId = $(this).children("div").children("p").attr("id");

    let taskTime = Number(timeId);

    if(taskTime < currentHour){

        $(this).children(".textarea").addClass(".pre");
    }
    else if(taskTime === currentHour){

        $(this).children(".textarea").addClass(".now");
    }
    else {

        $(this).children(".textarea").addClass(".tomorrow");
    }
});

