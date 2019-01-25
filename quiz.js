// Gets elements from HTML and defines variables
var submitbutton = document.getElementById("submitbutton");
var grade = document.getElementById("grade");
var grade2 = document.getElementById("grade2");
var results = document.getElementById("results");
var correctAnswers = 0;
var getQuestionData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var totalAnswers = getQuestionData.length;

function generatePercentage(correct, total) {
  var percentage = Math.round((correct / total) * 100) + "%";
  return percentage;
}

//AnswerKey (added 1/20/2019)
var answerKey = [
  /* 1 */ [
    "pam",
    "pam beesly",
    "pamela",
    "pamela beesly",
    "pam halpert",
    "pamela halpert"
  ],
  /* 2 */ [
    "scranton",
    "scranton, pa",
    "scranton pa",
    "scranton, pa.",
    "scranton pa.",
    "scranton, pennsylvania",
    "scranton pennsylvania",
    "dunder mifflin scranton"
  ],
  /* 3 */ ["angela", "angela martin"],
  /* 4 */ [
    "dwight",
    "dwight schrute",
    "dwight k schrute",
    "dwight kurt schrute",
    "dwight k. schrute"
  ],
  /* 5 */ ["kurt"],
  /* 6 */ ["kevin", "kevin malone", "kev", "kev malone"],
  /* 7 */ [
    "nard dog",
    "the nard dog",
    "'nard dog",
    "the 'nard dog",
    "nard dawg",
    "the 'nard dawg",
    "buzz",
    "ace",
    "puke",
    "king butt",
    "baby wawa",
    "iceman",
    "ice man",
    "boner champ",
    "the boner champ"
  ],
  /* 8 */ [
    "beets",
    "beet",
    "sugarbeet",
    "sugarbeets",
    "sugar beet",
    "beet crops",
    "beet crop",
    "sugarbeet crop",
    "sugar beet crop"
  ],
  /* 9 */ ["bob vance", "bob", "robert vance", "vance", "robert"],
  /* 10*/ ["hunter", "hunter raymond"]
];

function alertClick() {
  for (var i = 0; i < getQuestionData.length; i++) {
    var currentQuestion = document.getElementById("question" + i);
    var correctAnswersFromKey = answerKey[i];
    var isCorrect = correctAnswersFromKey.includes(currentQuestion.value);
    console.log(isCorrect);
    var currentQuestionError = document.getElementById(
      "question" + i + "Error"
    );
    if (isCorrect) {
      currentQuestionError.textContent = "✅";
      correctAnswers++;
    } else {
      currentQuestionError.textContent = "❌";
    }
  }
  evaluateGrade();
}

function evaluateGrade() {
  if (correctAnswers / totalAnswers === 1) {
    grade.textContent = "Grade: A+";
    grade2.textContent = "Perfect score! You're a real Office know-it-all!";
  } else if (
    correctAnswers / totalAnswers >= 0.9 &&
    correctAnswers / totalAnswers < 1
  ) {
    grade.textContent = "Grade: A";
    grade2.textContent =
      "So close! Try for a perfect score - change your wrong answer and click Submit!";
  } else if (
    correctAnswers / totalAnswers >= 0.8 &&
    correctAnswers / totalAnswers < 0.9
  ) {
    grade.textContent = "Grade: B";
    grade2.textContent =
      "Good job! See if you can improve by changing your incorrect answers and clicking Submit!";
  } else if (
    correctAnswers / totalAnswers >= 0.7 &&
    correctAnswers / totalAnswers < 0.8
  ) {
    grade.textContent = "Grade: C";
    grade2.textContent =
      "Not bad! Try again by changing your incorrect answers and clicking Submit!";
  } else if (
    correctAnswers / totalAnswers >= 0.6 &&
    correctAnswers / totalAnswers < 0.7
  ) {
    grade.textContent = "Grade: D";
    grade2.textContent =
      "Let's try again! Change your incorrect answers and click Submit!";
  } else if (correctAnswers / totalAnswers < 0.6) {
    grade.textContent = "Grade: F";
    grade2.textContent =
      "Try again by changing your incorrect answers and clicking Submit!";
  }
  results.textContent =
    "(You got " +
    generatePercentage(correctAnswers, totalAnswers) +
    " of the questions correct)";
  correctAnswers = 0;
}

// Links button to function each time user clicks submit
submitbutton.addEventListener("click", alertClick);
