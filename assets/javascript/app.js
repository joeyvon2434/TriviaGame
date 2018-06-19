
//Variable Section
//====================================

//Question Objects====================

var question1 = {
    questionNumber: 1,
    questionText: "What year did Neil Armstrong first set foot on the Moon?",
    answers: [["1969", "correct"], ["1983", "wrong"], ["1965", "wrong"], ["1972", "wrong"]],
    pictureSource: 'assets/images/kitten.png',
    correctAnswerText: 'Neil Armstrong fisrt set foot on the moon in 1969.'
};

var question2 = {
    questionNumber: 2,
    questionText: "On April 12, 1981, the first Space Shuttle lifted off from Kennedy Space Center and entered orbit around the Earth. What was the name of this shuttle?",
    answers: [["Columbia", "correct"], ["Challenger", "wrong"], ["Discovery", "wrong"], ["Endeavour", "wrong"]],
    pictureSource: '#',
    correctAnswerText: 'Columbia was the first Space Shuttle to lift off from Kennedy Space Center and achieve orbit on April 12, 1981. Previous test flights of the orbiter, Enterprise, were launched from a modified Boeing 747, and was used exlcusively for unpowered atmospheric test flights.'
};

var question3 = {
    questionNumber: 3,
    questionText: "The first person to journey into space was a Russian man in 1961. What was his name?",
    answers: [["Yuri Gagarin", "correct"], ["Yakov Smirnoff", "wrong"], ["Fyodor Dostoyevsky", "wrong"], ["Pyotr Tchaikovsky", "wrong"]],
    pictureSource: '#',
    correctAnswerText: 'Yuri Gegarin was the first human to journey to space on April 12, 1961 aboard Vostok 1.'
};

var questionArray = [question1, question2, question3];

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
    //=========================================================



    //Correct answer choice
    $('#answer-list').on('click', '.correct', function () {
        clearInterval(intervalId);
        $('.questions').fadeOut(function () {
            $('#question-text').text(questionArray[questionCounter].correctAnswerText);
            $('.wrong').css('visibility', 'hidden');
            $('#answer-image').attr('src', questionArray[questionCounter].pictureSource);
            correctChoices = correctChoices + 1;
        }).fadeIn(500); //end fade out function to ensure proper order of execution
        $('#answer-image').delay(500).fadeIn(500);

        //call function to transition to next question
        time = 10;
        intervalId = setInterval(transitionCountDown, 1000);

    }); //end click function for correct answers




    //Wrong answer choice
    $('#answer-list').on('click', '.wrong', function () {
        clearInterval(intervalId);
        $('.questions').fadeOut(function () {
            $('#question-text').text(questionArray[questionCounter].correctAnswerText);
            $('.wrong').css('visibility', 'hidden');
            $('#answer-image').attr('src', questionArray[questionCounter].pictureSource);
            wrongChoices = wrongChoices + 1;
        }).fadeIn(500); //end fade out function to ensure proper order of execution
        $('#answer-image').delay(500).fadeIn(500);

        //call function to transition to next question
        time = 10;
        intervalId = setInterval(transitionCountDown, 1000);

    }); //end click function for wrong answers



    //Time Rnning Out is included in the countDown function below


    //===================================
    //Called Functions (Utility Functions)
    //===================================





    //Function that prepares the next question
    //=======================================
    function nextQuestion() {
        //set question text
        clearInterval(intervalId);
        $('#question-text').text(questionArray[questionCounter].questionText);

        //set answers ==================



        //======================================================================================
        //Create an array of answers to be shuffled
        var shuffleArray = questionArray[questionCounter].answers;
    //while loop to stop answer creation once all answers are created
        while (shuffleArray.length > 0) {

    //Pull first item from shuffled array
            var shuffleIndex = Math.floor(Math.random() * shuffleArray.length);
            var answerCreation = shuffleArray[shuffleIndex];

    //Create a list item for the first answer
            var newAnswer = $("<div>");
            newAnswer.text(answerCreation[0]);
            newAnswer.addClass(answerCreation[1]);
            newAnswer.addClass('answer')
            $('#answer-list').append(newAnswer);
            shuffleArray.splice(shuffleIndex, 1);
            console.log('length' + shuffleArray.length)
        }; //End while loop for answer creation
    //============================================================================================

///===========TESTING ANSWER LOOP, COMMENTED OUT FOR RANDOMIZED QUESTION ORDER ABOVE ===================
    // for (i=0; i < 4; i++) {
    //     var newAnswerA = $('<div>');
    //     newAnswerA.text(questionArray[questionCounter].answers[i][0]);
    //     console.log(questionArray[questionCounter].answers[i][0]);
    //     newAnswerA.addClass(questionArray[questionCounter].answers[i][1]);
    //     newAnswerA.addClass('answer');
    //     $('#answer-list').append(newAnswerA);
    // }


    //Show question and answers
        $(".questions").delay(500).fadeIn(500);
        $('.answer').delay(500).fadeIn(500);

    //start timer
        intervalId = setInterval(countDown, 1000);

    }; //End next question function




    //Count Down Function for timer
    //===================================
    function countDown() {
        time = time - 1;
        $('#timer').text(time);

        if (time == 0) {
            //end timer when it reaches 0
            clearInterval(intervalId);

            //hide appropriate items and then show correct answer
            $('.questions').fadeOut(function () {
                $('#question-text').text(questionArray[questionCounter].correctAnswerText);
                $('.wrong').css('visibility', 'hidden');
                $('#answer-image').attr('src', questionArray[questionCounter].pictureSource);
                wrongChoices = wrongChoices + 1;
            }).fadeIn(500); //end fade out function to ensure proper order of execution
            $('#answer-image').delay(500).fadeIn(500);

            //Call transitionCountDown function
            time = 10;
            intervalId = setInterval(transitionCountDown, 1000);


        }//end if statement for no time left
    }// end countDown timer

    function transitionCountDown() {
        console.log(time);
        time = time - 1;

        if (time == 0) {
            clearInterval(intervalId);
            time = 30;
            questionCounter = questionCounter + 1;
            $('#answer-image').fadeOut();
            $('.questions').fadeOut();//function () { // this function set up is causing the problem. this part gets called 3 times
                $('#answer-list').text('');
                $('.wrong').css('visibility', 'visible');
                nextQuestion();
                console.log('error test');
            //});                       //this is the end of the function set up causing the problem
            
        };
    };


}); //document.ready end
