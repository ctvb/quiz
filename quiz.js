const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
  {
    question: 'What is HTML used for?',
    choice1: 'The aesthetic of the page',
    choice2: 'The structure of the page',
    choice3: 'The interactive features of the page',
    choice4: 'All of the above',
    answer: 2,
  },
  {
    question: 'What does CSS stand for?',
    choice1: 'Cascading Style Sheets',
    choice2: 'Cascading Sheets Styled',
    choice3: 'Cascaded Styled Sheets',
    choice4: 'All of the above',
    answer: 1,
  },
  {
    question: 'What aspect of web development is JavaScript responsible for?',
    choice1: 'JavaScript makes everyaspect of a webpage',
    choice2: 'JavaScript has nothing to do with web',
    choice3: 'JavaScript deals with the interactive features of the page',
    choice4: 'All of the above',
    answer: 3,
  },
  {
    question: 'Where do you link a CSS file to HTML?',
    choice1: 'The footer',
    choice2: 'The header',
    choice3: 'The divs',
    choice4: 'The head',
    answer: 4,
  },
  {
    question: 'Where do you link a JS file?',
    choice1: 'You cannot',
    choice2: 'In the CSS file',
    choice3: 'Towards the bottom of the HTML file',
    choice4: 'All of the above',
    answer: 3,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
  // availableQuestions = (...questions)
  getNewQuestion();
};

// Set duration
var duration = 60;

// Get countdown element from DOM
var countdown = document.getElementById('time');

// Get start time
var startTime = Date.now();

// Update the countdown every second
var timer = setInterval(() => {
  var timeLeft = duration - Math.floor((Date.now() - startTime) / 1000);
  countdown.innerHTML = timeLeft + ' seconds';

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdown.innerHTML = "Time's up!";
  }
}, 1000);

getNewQuestion = () => {
  if (questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);

    return window.location.assign('/end.html');
  }

  questionCounter++;
  //   progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}';
  //   progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS} *100%';

  let questionsIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[questionsIndex];
  question.textContent = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionsIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    var classToApply =
      selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    if (classToApply === 'correct') {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
