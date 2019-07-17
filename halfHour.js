//Vanilla javascript that runs a function at a particular time period for 5 minutes by the hour.
//Example: Shows an image for 5 minutes every 30 minutes by the hour(9:30, 10:30, 11:30, etc.).

const minsMin = 30;
const minsMax = 35;

function printDoc1(){

//randomizer of quotes.
  return "<style> .hero{ padding: 10px;} </style>"+  "<img class=\"hero\" src=images/myhero.jpg> </img>";

}

function checkTime() {
  var time = new Date();
  var mins = time.getMinutes();
  var hours= time.getHours();
  //every 30 minutes?
  //mins = (59-mins) % 30;

  var secs = time.getSeconds();

//This is a countdown code for seconds. Really useful.
/*
  if (secs != 60)
  { secs = (59-secs) % 60; }
  else
  { secs = 00; }

*/

//Adds a 0 in the front of the seconds when it runs.
mins= (mins < 10) ? "0" + mins :mins;
secs = (secs < 10) ? "0" + secs : secs;

if(hours > 12){
        hours = hours - 12;
    }

  //get time and timeformat.
  //time = [Number(mins),Number(secs)];
  timeFormat= hours + ":" + mins + ":" + secs;

//Condition: Between H:30 to H:35 in normal clock time.
  if (mins>=minsMin && mins<minsMax  && secs >= 0){
      return "<h2>" + timeFormat + "</h2>" +printDoc1();
  }
else{
  return "<p>" + timeFormat + "</p>";
}
}

//Example of Continuous Updating.
var myVar= setInterval(printDoc, 1000);

printDoc();

function printDoc(){

//put what is in body.
document.querySelector(".timeFrame").innerHTML= checkTime();
}
