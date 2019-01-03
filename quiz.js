// Gets elements from HTML and defines variables
var submitbutton = document.getElementById('submitbutton');
var question1 = document.getElementById('question1');
var question1Error = document.getElementById('question1Error');
var question2 = document.getElementById('question2');
var question2Error = document.getElementById('question2Error');
var question3 = document.getElementById('question3');
var question3Error = document.getElementById('question3Error');
var question4 = document.getElementById('question4');
var question4Error = document.getElementById('question4Error');
var question5 = document.getElementById('question5');
var question5Error = document.getElementById('question5Error');
var question6 = document.getElementById('question6');
var question6Error = document.getElementById('question6Error');
var question7 = document.getElementById('question7');
var question7Error = document.getElementById('question7Error');
var question8 = document.getElementById('question8');
var question8Error = document.getElementById('question8Error');
var question9 = document.getElementById('question9');
var question9Error = document.getElementById('question9Error');
var question10 = document.getElementById('question10');
var question10Error = document.getElementById('question10Error');
var grade = document.getElementById('grade');
var grade2 = document.getElementById('grade2');
var results = document.getElementById('results');
var correctAnswers = 0;
var totalAnswers = 10;

function generatePercentage(correct, total) {
    var percentage = Math.round(correct / total * 100) + '%';
    return percentage;
}

// Defines function for clicking Submit
function alertClick() {
    if (question1.value.toLowerCase() === 'pam' ||
        question1.value.toLowerCase() === 'pam beesly' ||
        question1.value.toLowerCase() === 'pamela' ||
        question1.value.toLowerCase() === 'pamela beesly' ||
        question1.value.toLowerCase() === 'pam halpert' ||
        question1.value.toLowerCase() === 'pamela halpert') {
        correctAnswers ++;
        question1Error.textContent = '✅';
    }
    else {
        question1Error.textContent = '❌';
    }
    if (question2.value.toLowerCase() === 'scranton' ||
        question2.value.toLowerCase() === 'scranton, pa' ||
        question2.value.toLowerCase() === 'scranton pa' ||
        question2.value.toLowerCase() === 'scranton, pa.' ||
        question2.value.toLowerCase() === 'scranton pa.' ||
        question2.value.toLowerCase() === 'scranton, pennsylvania' ||
        question2.value.toLowerCase() === 'scranton pennsylvania' ||
        question2.value.toLowerCase() === 'dunder mifflin scranton') {
        correctAnswers ++;
        question2Error.textContent = '✅'
    }
    else {
        question2Error.textContent = '❌';
    }
    if (question3.value.toLowerCase() === 'angela' ||
        question3.value.toLowerCase() === 'angela martin') {
        correctAnswers ++;
        question3Error.textContent = '✅'
    }
    else {
        question3Error.textContent = '❌';
    }
    if (question4.value.toLowerCase() === 'dwight' ||
        question4.value.toLowerCase() === 'dwight schrute' ||
        question4.value.toLowerCase() === 'dwight k schrute' ||
        question4.value.toLowerCase() === 'dwight kurt schrute' ||
        question4.value.toLowerCase() === 'dwight k. schrute') {
        correctAnswers ++;
        question4Error.textContent = '✅'
    }
    else {
        question4Error.textContent = '❌';
    }
    if (question5.value.toLowerCase() === 'kurt') {
        correctAnswers ++;
        question5Error.textContent = '✅'
    }
    else {
        question5Error.textContent = '❌';
    }
    if (question6.value.toLowerCase() === 'kevin'||
        question6.value.toLowerCase() === 'kevin malone' ||
        question6.value.toLowerCase() === 'kev' ||
        question6.value.toLowerCase() === 'kevin malone') {
        correctAnswers ++;
        question6Error.textContent = '✅'
    }
    else {
        question6Error.textContent = '❌';
    }
    if (question7.value.toLowerCase() === 'nard dog' ||
        question7.value.toLowerCase() === 'the nard dog' ||
        question7.value.toLowerCase() === '\'nard dog' ||
        question7.value.toLowerCase() === 'the \'nard dog' ||
        question7.value.toLowerCase() === 'nard dawg' ||
        question7.value.toLowerCase() === 'the nard dawg' ||
        question7.value.toLowerCase() === '\'nard dawg' ||
        question7.value.toLowerCase() === 'the \'nard dawg' ||
        question7.value.toLowerCase() === 'buzz' ||
        question7.value.toLowerCase() === 'ace' ||
        question7.value.toLowerCase() === 'puke' ||
        question7.value.toLowerCase() === 'king butt' ||
        question7.value.toLowerCase() === 'baby wawa' ||
        question7.value.toLowerCase() === 'boner champ' ||
        question7.value.toLowerCase() === 'the boner champ') {
        correctAnswers ++;
        question7Error.textContent = '✅'
    }
    else {
        question7Error.textContent = '❌';
    }
    if (question8.value.toLowerCase() === 'beets' ||
        question8.value.toLowerCase() === 'beet' ||
        question8.value.toLowerCase() === 'sugarbeet' ||
        question8.value.toLowerCase() === 'sugarbeets' ||
        question8.value.toLowerCase() === 'sugar beet' ||
        question8.value.toLowerCase() === 'beet crops' ||
        question8.value.toLowerCase() === 'beet crop' ||
        question8.value.toLowerCase() === 'sugarbeet crop' ||
        question8.value.toLowerCase() === 'sugar beet crop') {
        correctAnswers ++;
        question8Error.textContent = '✅'
    }
    else {
        question8Error.textContent = '❌';
    }
    if (question9.value.toLowerCase() === 'bob vance'||
        question9.value.toLowerCase() === 'bob' ||
        question9.value.toLowerCase() === 'robert vance' ||
        question9.value.toLowerCase() === 'vance' ||
        question9.value.toLowerCase() === 'robert') {
        correctAnswers ++;
        question9Error.textContent = '✅'
    }
    else {
    question9Error.textContent = '❌';
    }
    if (question10.value.toLowerCase() === 'hunter' ||
        question10.value.toLowerCase() === 'hunter raymond') {
        correctAnswers ++;
        question10Error.textContent = '✅'
    }
    else {
        question10Error.textContent = '❌';
    }

    if (correctAnswers/totalAnswers === 1) {
        grade.textContent = 'Grade: A+';
        grade2.textContent = 'Perfect score! You\'re a real Office know-it-all!';
    } else if (correctAnswers/totalAnswers >= .9 && correctAnswers/totalAnswers < 1) {
        grade.textContent = 'Grade: A';
        grade2.textContent = 'So close! Try for a perfect score - change your wrong answer and click Submit!';
    } else if (correctAnswers/totalAnswers >= .8 && correctAnswers/totalAnswers < .9) {
        grade.textContent = 'Grade: B';
        grade2.textContent = 'Good job! See if you can improve by changing your incorrect answers and clicking Submit!';
    } else if (correctAnswers/totalAnswers >= .7 && correctAnswers/totalAnswers < .8) {
        grade.textContent = 'Grade: C';
        grade2.textContent = 'Not bad! Try again by changing your incorrect answers and clicking Submit!';
    } else if (correctAnswers/totalAnswers >= .6 && correctAnswers/totalAnswers < .7) {
        grade.textContent = 'Grade: D';
        grade2.textContent = 'Let\'s try again! Change your incorrect answers and click Submit!';
    } else if (correctAnswers/totalAnswers < .6) {
        grade.textContent = 'Grade: F';
        grade2.textContent = 'Try again by changing your incorrect answers and clicking Submit!';
    }
    results.textContent = '(You got ' + generatePercentage(correctAnswers, totalAnswers) + ' of the questions correct)';
    correctAnswers = 0;
}

// Links button to function each time user clicks submit
submitbutton.addEventListener('click', alertClick)