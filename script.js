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


//12PM

//Colours
if (currentHour > 12) {
    $(".twelve").addClass("past");
}
else if (currentHour >= 12 && currentHour < 13) {
    $(".twelve").addClass("present");
}
else if (currentHour < 12) {
    $(".twelve").addClass("future");
}


//Storage
var twelvePm = document.querySelector('.twelve');
var twelvePmSaveBtn = document.querySelector('.saveBtn4');

  twelvePm.value = localStorage.getItem('storage4');
  twelvePmSaveBtn.addEventListener('click', updateOutput4);
  function updateOutput4() {
       localStorage.setItem('storage4', twelvePm.value);
   };


//1PM

//Colours
if (currentHour > 13) {
    $(".thirteen").addClass("past");
}
else if (currentHour >= 13 && currentHour < 14) {
    $(".thirteen").addClass("present");
}
else if (currentHour < 13) {
    $(".thirteen").addClass("future");
}

//Storage
var onePm = document.querySelector('.thirteen');
var onePmSaveBtn = document.querySelector('.saveBtn5');

  onePm.value = localStorage.getItem('storage5');
  onePmSaveBtn.addEventListener('click', updateOutput5);
  function updateOutput5() {
       localStorage.setItem('storage5', onePm.value);
   };


//2PM
if (currentHour > 14) {
    $(".fourteen").addClass("past");
}
else if (currentHour >= 14 && currentHour < 15) {
    $(".fourteen").addClass("present");
}
else if (currentHour < 14) {
    $(".fourteen").addClass("future");
}

//Storage
var twoPm = document.querySelector('.fourteen');
var twoPmSaveBtn = document.querySelector('.saveBtn6');

  twoPm.value = localStorage.getItem('storage6');
  twoPmSaveBtn.addEventListener('click', updateOutput6);
  function updateOutput6() {
       localStorage.setItem('storage6', twoPm.value);
   };



//3pm

//Colours
if (currentHour > 15) {
    $(".fifteen").addClass("past");
}
else if (currentHour >= 15 && currentHour < 16) {
    $(".fifteen").addClass("present");
}
else if (currentHour < 15) {
    $(".fifteen").addClass("future");
}

//Storage
var threePm = document.querySelector('.fifteen');
var threePmSaveBtn = document.querySelector('.saveBtn7');

  threePm.value = localStorage.getItem('storage7');
  threePmSaveBtn.addEventListener('click', updateOutput7);
  function updateOutput7() {
       localStorage.setItem('storage7', threePm.value);
   };



//4pm

//Colours
if (currentHour > 16) {
    $(".sixteen").addClass("past");
}
else if (currentHour >= 16 && currentHour < 17) {
    $(".sixteen").addClass("present");
}
else if (currentHour < 16) {
    $(".sixteen").addClass("future");
}


//Storage
var fourPm = document.querySelector('.sixteen');
var fourPmSaveBtn = document.querySelector('.saveBtn8');

  fourPm.value = localStorage.getItem('storage8');
  fourPmSaveBtn.addEventListener('click', updateOutput8);
  function updateOutput8() {
       localStorage.setItem('storage8', fourPm.value);
   };



//5pm

//Colours
if (currentHour > 17) {
    $(".seventeen").addClass("past");
}
else if (currentHour >= 17 && currentHour < 18) {
    $(".seventeen").addClass("present");
}
else if (currentHour < 17) {
    $(".seventeen").addClass("future");
}

//Storage
var fivePm = document.querySelector('.seventeen');
var fivePmSaveBtn = document.querySelector('.saveBtn9');

  fivePm.value = localStorage.getItem('storage9');
  fivePmSaveBtn.addEventListener('click', updateOutput9);
  function updateOutput9() {
       localStorage.setItem('storage9', fivePm.value);
   };


