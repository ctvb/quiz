var timer = document.getElementById('countdown');
var main = document.getElementById('main');

var message = 'Questions';
var words = message.split(' ');

function countdown () {
    var timeLeft = time;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeInterval.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = timeLeft + 'second remaining';
            timeLeft--;
        }else {
            timer.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}