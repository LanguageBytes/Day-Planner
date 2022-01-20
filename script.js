//Displays Current Time on the Page

function displayTime(){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }
setInterval(displayTime, 1000);
displayTime();

//Shows Hours in First Column
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


//Setting the Current Hour
var currentHour = new Date().getHours();

//9AM

//Colours
if (currentHour > 9) {
    $(".nine").addClass("past");
}
else if (currentHour >= 9 && now < 10) {
    $(".nine").addClass("present");
}
else if (currentHour < 9) {
    $(".nine").addClass("future");
}

//Storage
 var nineAm = document.querySelector('.nine');
 var nineAmSaveBtn = document.querySelector('.saveBtn1');
   nineAm.value = localStorage.getItem('storage1');
   nineAmSaveBtn.addEventListener('click', updateOutput1);
   function updateOutput1() {
        localStorage.setItem('storage1', nineAm.value);
    };


//10AM

//Colours
if (currentHour > 10) {
    $(".ten").addClass("past");
}
else if (currentHour >= 10 && currentHour < 11) {
    $(".ten").addClass("present");
}
else if (currentHour < 10) {
    $(".ten").addClass("future");
}


//Storage
var tenAm = document.querySelector('.ten');
var tenAmSaveBtn = document.querySelector('.saveBtn2');

  tenAm.value = localStorage.getItem('storage2');
  tenAmSaveBtn.addEventListener('click', updateOutput2);
  function updateOutput2() {
       localStorage.setItem('storage2', tenAm.value);
   };

//11AM

//Colours
if (currentHour > 11) {
    $(".eleven").addClass("past");
}
else if (currentHour >= 11 && currentHour < 12) {
    $(".eleven").addClass("present");
}
else if (currentHour < 11) {
    $(".eleven").addClass("future");
}

//Storage
var elevenAm = document.querySelector('.eleven');
var elevenAmSaveBtn = document.querySelector('.saveBtn3');

  elevenAm.value = localStorage.getItem('storage3');
  elevenAmSaveBtn.addEventListener('click', updateOutput3);
  function updateOutput3() {
       localStorage.setItem('storage3', elevenAm.value);
   };

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


//Save Storage


