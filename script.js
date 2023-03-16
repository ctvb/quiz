// var timer = document.getElementById('countdown');
// var main = document.getElementById('main');

// var message = 'Questions';
// var words = message.split(' ');

// document.getElementById("question").innerHTML = "New text!";
// document.getElementById("a1").innerHTML = "New text!";
// document.getElementById("a2").innerHTML = "New text!";
// document.getElementById("a3").innerHTML = "New text!";
// document.getElementById("a4").innerHTML = "New text!";
// // const startTime = Date.now();
// // set duration
// var duration = 60;
// // get count down element from dom
// var countdown = document.getElementById("countdown");

// // update the countdown every second
// var timer = setInterval(() => {
//     var timeLeft = duration - Math.floor((Date.now() - startTime) / 1000);

//     countdown.innerHTML = `Time Left: ${timeLeft} seconds`;

//     if (timeLeft <= 0) {
//         clearInterval(timer);
//         countdown.innerHTML = "Time's up!";
//     }
// }, 1000);

// set duration
// var duration = 60;

// // get countdown element from DOM
// var countdown = document.getElementById("countdown");

// // get start time
// var startTime = Date.now();

// // update the countdown every second
// var timer = setInterval(() => {
//     var timeLeft = duration - Math.floor((Date.now() - startTime) / 1000);

// countdown.innerHTML = `Time Left: ${timeLeft} seconds`;

//     if (timeLeft <= 0) {
//         clearInterval(timer);
//         countdown.innerHTML = "Time's up!";
//     }
// }, 1000);
// var timerCount = 60
// function startTimer () {
//     // run countdown
//     timerInterval = setInterval(function() {
//         timerCount--;
//         timerElement.textContent = timerCount;
//         // if timer reaches 0, game lost
//         if (timerCount === 0) {
//             loseGame();
//         }
//     }, 1000);
// }

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
