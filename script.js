//Displays Current Time on the Page

function displayTime(){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }
setInterval(displayTime, 1000);
displayTime();

//Shows Hours in Table
function showHour(){
   nine = $("#nine").text(moment().set('hour', 9).format("hA"));
   ten = $("#ten").text(moment().set('hour', 10).format("hA"));
   eleven = $("#eleven").text(moment().set('hour', 11).format("hA"));
   twelve = $("#twelve").text(moment().set('hour', 12).format("hA"));
   thirteen = $("#thirteen").text(moment().set('hour', 13).format("hA"));
   fourteen = $("#fourteen").text(moment().set('hour', 14).format("hA"));
   fifteen = $("#fifteen").text(moment().set('hour', 15).format("hA"));
   sixteen = $("#sixteen").text(moment().set('hour', 16).format("hA"));
   seventeen = $("#seventeen").text(moment().set('hour', 17).format("hA"));}
showHour();
setInterval(showHour, 1000);


//Changes Colours of TextArea
var currentHour = new Date().getHours();

//11
if (currentHour > 9) {
    $(".nine").addClass("past");
}
else if (currentHour >= 9 && now < 10) {
    $(".nine").addClass("present");
}
else if (currentHour < 9) {
    $(".nine").addClass("future");
}

//10
if (currentHour > 10) {
    $(".ten").addClass("past");
}
else if (currentHour >= 10 && currentHour < 11) {
    $(".ten").addClass("present");
}
else if (currentHour < 10) {
    $(".ten").addClass("future");
}

//11
if (currentHour > 11) {
    $(".eleven").addClass("past");
}
else if (currentHour >= 11 && currentHour < 12) {
    $(".eleven").addClass("present");
}
else if (currentHour < 11) {
    $(".eleven").addClass("future");
}

//12
if (currentHour > 12) {
    $(".twelve").addClass("past");
}
else if (currentHour >= 12 && currentHour < 13) {
    $(".twelve").addClass("present");
}
else if (currentHour < 12) {
    $(".twelve").addClass("future");
}

//13
if (currentHour > 13) {
    $(".thirteen").addClass("past");
}
else if (currentHour >= 13 && currentHour < 14) {
    $(".thirteen").addClass("present");
}
else if (currentHour < 13) {
    $(".thirteen").addClass("future");
}


//14
if (currentHour > 14) {
    $(".fourteen").addClass("past");
}
else if (currentHour >= 14 && currentHour < 15) {
    $(".fourteen").addClass("present");
}
else if (currentHour < 14) {
    $(".fourteen").addClass("future");
}


//15
if (currentHour > 15) {
    $(".fifteen").addClass("past");
}
else if (currentHour >= 15 && currentHour < 16) {
    $(".fifteen").addClass("present");
}
else if (currentHour < 15) {
    $(".fifteen").addClass("future");
}



//16
if (currentHour > 16) {
    $(".sixteen").addClass("past");
}
else if (currentHour >= 16 && currentHour < 17) {
    $(".sixteen").addClass("present");
}
else if (currentHour < 16) {
    $(".sixteen").addClass("future");
}


//17
if (currentHour > 17) {
    $(".seventeen").addClass("past");
}
else if (currentHour >= 17 && currentHour < 18) {
    $(".seventeen").addClass("present");
}
else if (currentHour < 17) {
    $(".seventeen").addClass("future");
}


//Save

