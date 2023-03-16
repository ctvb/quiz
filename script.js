// Update question and answer options
document.getElementById("question").innerHTML = "New question?";
document.getElementById("a1").innerHTML = "Answer 1";
document.getElementById("a2").innerHTML = "Answer 2";
document.getElementById("a3").innerHTML = "Answer 3";
document.getElementById("a4").innerHTML = "Answer 4";

// Set duration
var duration = 60;

// Get countdown element from DOM
var countdown = document.getElementById("time");

// Get start time
var startTime = Date.now();

// Update the countdown every second
var timer = setInterval(() => {
    var timeLeft = duration - Math.floor((Date.now() - startTime) / 1000);
    countdown.innerHTML = timeLeft + " seconds";

    if (timeLeft <= 0) {
        clearInterval(timer);
        countdown.innerHTML = "Time's up!";
    }
}, 1000);