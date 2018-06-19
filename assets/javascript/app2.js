//Variable Section
//=================

//Question Objects
var question1 = {
    questionNumber: 1,
    questionText: "What year did Neil Armstrong become the first person to walk on the Moon?",
    answers: [["1969", "correct"], ["1983", "wrong"], ["1965", "wrong"], ["1972", "wrong"]],
    pictureSource: 'assets/images/kitten.png',
    correctAnswerText: 'Neil Armstrong first set foot on the Moon in 1969.'
};

var question2 ={
    questionNumber: 2,
    questionText: "On April 12, 1981, the first Space Shuttle lifted iff from Kenedy SPace Center and entered orbit around the Earth. What was the name of this orbiter?",
    answers: [["Columbia", "correct"], ["Challenger", "wrong"], ["Discovery", "wrong"], ["Endeavour", "wrong"]],
    pictureSource: 'assets/images/kitten.png',
    correctAnswerText: 'Neil Armstrong first set foot on the Moon in 1969.'
};

var questionArray = [question1, question2];

//Game stats and progression variables
var questionCounter = 0;
var correctChoices = 0;
var wrongChoices = 0;
var intervalId;
var time = 30;

$(document).ready(function() {




});