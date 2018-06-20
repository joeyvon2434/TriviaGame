
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

var question4 = {
    questionNumber: 4,
    questionText: "As of June 2018, what is the name of the man-made spacecraft currently farthest from the Earth?",
    answers: [["Voyager 1", "correct"], ["Voyager 2", "wrong"], ["Cassini", "wrong"], ["Enterprise", "wrong"]],
    pictureSource: '#',
    correctAnswerText: 'Launched on September 5, 1977, Voyager 1 is over 21 billion kilometers from Earth, and has been operational for over 40 years.'
};

var question5 = {
    questionNumber: 5,
    questionText: "These neutron stars rotate rapidly and send out pulses of energy on regular intervals, sometimes over 1000 times per second. What are they called?",
    answers: [["Pulsars", "correct"], ["Black Holes", "wrong"], ["Red Dwarfs", "wrong"], ["Tyson Stars", "wrong"]],
    pictureSource: '#',
    correctAnswerText: 'Some pulsars rival atomic clocks in their time keeping accuracy.'
};

var question6 = {
    questionNumber: 6,
    questionText: "Launched in 1990, this space telescope has led to the discovery of many new interesting facts, and has help provide justification for some of physics' leading theories?",
    answers: [["Hubble", "correct"], ["Andromeda", "wrong"], ["Pulsar", "wrong"], ["Orion", "wrong"]],
    pictureSource: '#',
    correctAnswerText: 'The Hubble Space Telescope has a mirror 2.4 meters in diameter, and has helped scientists accurately measure the expansion of the universe.'
};

var question7 = {
    questionNumber: 7,
    questionText: "What is the name of the Galaxy closest to the Milky Way?",
    answers: [["Andromeda", "correct"], ["Tatooine", "wrong"], ["Nebula", "wrong"], ["Thanos", "wrong"]],
    pictureSource: '#',
    correctAnswerText: 'At 2.5 million light years from earth, Andromeda is the closest neighboring galaxy.'
};

var question8 = {
    questionNumber: 8,
    questionText: "As of June 2018, currently the largest man-made object in orbit, this outpost allows astronauts to stay in space for long duration experiments?",
    answers: [["International Space Station", "correct"], ["M.I.R.", "wrong"], ["Sky Lab", "wrong"], ["Discovery", "wrong"]],
    pictureSource: '#',
    correctAnswerText: "The International Space Station had it's first components launched in 1998, and is expected to operate until 2028."
};

var question9 = {
    questionNumber: 9,
    questionText: "The Falcon 9 rocket from this company is dramatically reducing the cost to get to orbit through reusability?",
    answers: [["SpaceX", "correct"], ["Boeing", "wrong"], ["Sky Flight", "wrong"], ["Blue Origin", "wrong"]],
    pictureSource: '#',
    correctAnswerText: "SpaceX is currently leading the way in reusable rocket technology, after successfully landing the Falcon 9 first stage 25 times as of June 2018."
};

var question10 = {
    questionNumber: 10,
    questionText: "What is the name of the planet that passes closest to Earth?",
    answers: [["Venus", "correct"], ["Mars", "wrong"], ["Mercury", "wrong"], ["Jupiter", "wrong"]],
    pictureSource: '#',
    correctAnswerText: "Venus is approximately 41 million kilometers from earth at it's closest approach."
};

//var questionArray = [question1, question2, question3] //testing array
var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

//Game stats and progression variables
var questionCounter = 0;
var correctChoices = 0;
var wrongChoices = 0;
var intervalId;
var time = 30;


$(document).ready(function () {
    $('#answer-image').hide();

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
        $('#timer').text('Correct!');
        $('#timer').css('color', 'green');
        clearInterval(intervalId);
        $('.questions').hide()
        $('#question-text').text(questionArray[questionCounter].correctAnswerText);
        $('.wrong').css('visibility', 'hidden');
        $('#answer-image').attr('src', questionArray[questionCounter].pictureSource);
        correctChoices = correctChoices + 1;
        $('.questions').fadeIn(500); //
        $('#answer-image').delay(500).fadeIn(500);

        //call function to transition to next question
        time = 10;
        intervalId = setInterval(transitionCountDown, 1000);

    }); //end click function for correct answers




    //Wrong answer choice
    $('#answer-list').on('click', '.wrong', function () {
        $('#timer').text('Incorrect!');
        $('#timer').css('color', 'red');
        clearInterval(intervalId);
        $('.questions').hide()
        $('#question-text').text(questionArray[questionCounter].correctAnswerText);
        $('.wrong').css('visibility', 'hidden');
        $('#answer-image').attr('src', questionArray[questionCounter].pictureSource);
        wrongChoices = wrongChoices + 1;
        $('.questions').fadeIn(500);
        $('#answer-image').delay(500).fadeIn(500);

        //call function to transition to next question
        time = 10;
        intervalId = setInterval(transitionCountDown, 1000);

    }); //end click function for wrong answers


//Time Running Out is included in the countDown function below


    //New Game Button
    //===================================
    $('#new-game').on('click', function() {
        $('.end-game').fadeOut(500);
        $('.start-screen').fadeIn(500);
        questionCounter = 0;
        correctChoices = 0;
        wrongChoices = 0;
        intervalId;
        time = 30;
    });


    //===================================
    //Called Functions (Utility Functions)
    //===================================





    //Function that prepares the next question
    //=======================================
    function nextQuestion() {
        //set question text
        clearInterval(intervalId);

        //Check if the last question has passed

        if (questionCounter == questionArray.length) {
            endGame();
        } else {


            $('#question-text').text(questionArray[questionCounter].questionText);

            //set answers ==================



            //======================================================================================
            //Create an array of answers to be shuffled
            var shuffleArray = questionArray[questionCounter].answers.slice(0);
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
            $('#timer').css('color', 'white');
            intervalId = setInterval(countDown, 1000);
        }
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
            $('.questions').hide()
            $('#timer').text('You didnt choose an answer in time!');
            $('#question-text').text(questionArray[questionCounter].correctAnswerText);
            $('.wrong').css('visibility', 'hidden');
            $('#answer-image').attr('src', questionArray[questionCounter].pictureSource);
            wrongChoices = wrongChoices + 1;
            $('.questions').fadeIn(500);
            $('#answer-image').delay(500).fadeIn(500);

            //Call transitionCountDown function
            time = 10;
            intervalId = setInterval(transitionCountDown, 1000);


        }//end if statement for no time left
    }// end countDown timer

    //Transition Timer
    //===========================
    function transitionCountDown() {
        console.log(time);
        time = time - 1;

        if (time == 0) {
            clearInterval(intervalId);
            time = 30;
            questionCounter = questionCounter + 1;
            $('#answer-image').fadeOut();

            // Try .promises and .done to stop the flash of new info.
            $('.questions').fadeOut().promise().done(function() {//function () { // this function set up is causing the problem. this part gets called 3 times
            $('#answer-list').text('');
            $('.wrong').css('visibility', 'visible');
            nextQuestion();
            console.log('error test');
            });                       //this is the end of the function set up causing the problem

        };
    };//End transition timer


    //End of Game Function

    function endGame() {
        $('#correct-answers').text('Correct: ' + correctChoices);
        $('#wrong-answers').text('Incorrect: ' + wrongChoices);
        $('.end-game').fadeIn(500);
    }


}); //document.ready end








//========================
//========================
