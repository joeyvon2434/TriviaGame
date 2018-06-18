
//Variable Section
//====================================

//Question Objects====================

var question1 = {
    questionNumber: 1,
    questionText: "What year did Neil Armstrong first set foot on the Moon?",
    answers: [["1969", "correct"], ["1983", "wrong"], ["1965", "wrong"], ["1972", "wrong"]],
    pictureSource: 'assets/images/kitten.png',
    correctAnswerText: 'Neil Armstrong fisrt set foot on the moon in 1969.'
}

var question2 = {
    questionNumber: 2,
    questionText: "On April 12, 1981, the first Space Shuttle lefted off from Kennedy Space Center and entered orbit around the Earth. What was the name of this shuttle?",
    answers: [["Columbia", "correct"], ["Challenger", "wrong"], ["Discovery", "wrong"], ["Endeavour", "wrong"]],
    pictureSource: 'xxxx',
    correctAnswerText: 'Columbia was the first Space Shuttle to lift off from Kennedy Space Center and achieve orbit on April 12, 1981. Previous test flights of the orbiter, Enterprise, were launched from a modified Boeing 747, and was used exlcusively for unpowered atmospheric test flights.'
}

var questionArray = [question1, question2];

//Game stats and progression variables
var questionCounter = 0;
var correctChoices = 0;
var wrongChoices = 0;
var intervalId;
var time = 30;

$(document).ready(function () {

    //===========================    
    //Game Progression Functions
    //===========================

    //Begin game click function
    //================================

    $('#start-button').on('click', function () {
        $(".start-screen").fadeOut(500);
        nextQuestion();
    });


    //Function to check for timeout or answer correctness
    //START HERE NEXT TIME
    //=========================================================

    //Correct answer choice
    $('#answer-list').on('click', '.correct', function () {
        clearInterval(intervalId);
        $('.questions').fadeOut(function () {

            $('#question-text').text(questionArray[questionCounter].correctAnswerText);
            $('.wrong').css('visibility', 'hidden');
            $('#answer-image').attr('src', questionArray[questionCounter].pictureSource);
            

            console.log(time);
            correctChoices = correctChoices + 1;
        }).fadeIn(500); //end fade out function to ensure proper order of execution
        $('#answer-image').delay(500).fadeIn(500);
    }); //end click function for correct




    //===================================
    //Called Functions (Utility Functions)
    //===================================

    //Function that prepares the next question
    //=======================================
    function nextQuestion() {
        //set question text
        $('#question-text').text(questionArray[questionCounter].questionText);

        //set answers ==================

        //Create an array of answers to be shuffled
        var shuffleArray = [];
        shuffleArray = questionArray[questionCounter].answers;


        //while loop to stop answer creation once all answers are created
        while (shuffleArray.length > 0) {

            //Pull first item from shuffled array
            var shuffleIndex = Math.floor(Math.random() * shuffleArray.length);
            var answerCreation = shuffleArray[shuffleIndex];


            //Create a list item for the first answer
            console.log('index' + shuffleIndex);
            var newAnswer = $("<div>");
            newAnswer.text(answerCreation[0]);
            newAnswer.addClass(answerCreation[1]);
            newAnswer.addClass('answer')
            $('#answer-list').append(newAnswer);
            shuffleArray.splice(shuffleIndex, 1);

        }; //End while loop for answer creation

        //Show question and answers
        $(".questions").delay(500).fadeIn(500);//Likely change this to a function call that works for all question changes

        //start timer
        intervalId = setInterval(countDown, 1000);

    }; //End next question function


    //Count Down Function for timer
    //===================================
    function countDown() {
        time = time - 1;
        $('#timer').text(time);
    }


}); //document.ready end
