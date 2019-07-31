//HTML elements as constant variables.
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

//global variables for timer(hour, minute, seconds, milliseconds), the interval object, and a boolean variable set to false.
var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]); //currentTime variable print outs the time in general.
    theTimer.innerHTML = currentTime; //update current time in html. (00:00:00).
    timer[3]++; // increase seconds.

    timer[0] = Math.floor((timer[3]/100)/60); //This is the hour variable for the timer.
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60)); //this is the minute variable for the timer.
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); //this is the second variable for the timer.
}

// Match the text entered with the provided text on the page.
function spellCheck() {
    let textEntered = testArea.value; //whar the user writes in text.
    let originTextMatch = originText.substring(0,textEntered.length); //the original text written in substring array form, to check letter by letter.


    if (textEntered == originText) { //if ALL of the text has been correctly written by the user from the original text in the text box.
        clearInterval(interval); //stop the interval timer.
        testWrapper.style.borderColor = "#429890"; //set background color of box to gray.
    } else {
        if (textEntered == originTextMatch) { //if SO FAR, what the text of the user is the one in the text box.
            testWrapper.style.borderColor = "#65CCf3"; //set background color of box to yellow.
        } else {
            testWrapper.style.borderColor = "#E95D0F"; //set teh backgorund to gray.
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length; //textEnteredLength is the length of what is written so far in the textarea. (For example: in text box has "a", then length of box is 1.)
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true; //set boolean variable timerRunning to true.
        interval = setInterval(runTimer, 10); // run the set interval as a variable.
    }
    //console.log(textEnterdLength);
}

// Reset everything.
function reset() {
    clearInterval(interval); //clear interval or stop interval.
    interval = null; //set interval to 0.
    timer = [0,0,0,0]; //set timer back to 0.
    timerRunning = false; //set boolean variable to false again.

    testArea.value = ""; //set testarea to empty.
    theTimer.innerHTML = "00:00:00"; //set the innerHTML
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset.
testArea.addEventListener("keypress", start, false); //when key is pressed.
testArea.addEventListener("keyup", spellCheck, false); //when key is released.
resetButton.addEventListener("click", reset, false); //reset button action listener.
