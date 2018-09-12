
//Variable Section
//====================================

//Question Objects====================

var question1 = {
    questionNumber: 1,
    questionText: "What year did Neil Armstrong first set foot on the Moon?",
    answers: [["1969", "correct"], ["1983", "wrong"], ["1965", "wrong"], ["1972", "wrong"]],
    pictureSource: 'https://cdn.britannica.com/700x450/99/157599-004-A154081E.jpg',
    correctAnswerText: 'Neil Armstrong fisrt set foot on the moon in 1969.'
};

var question2 = {
    questionNumber: 2,
    questionText: "On April 12, 1981, the first Space Shuttle lifted off from Kennedy Space Center and entered orbit around the Earth. What was the name of this shuttle?",
    answers: [["Columbia", "correct"], ["Challenger", "wrong"], ["Discovery", "wrong"], ["Endeavour", "wrong"]],
    pictureSource: 'data:image/jpeg;base64,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',
    correctAnswerText: 'Columbia was the first Space Shuttle to lift off from Kennedy Space Center and achieve orbit on April 12, 1981. Previous test flights of the orbiter, Enterprise, were launched from a modified Boeing 747, and was used exlcusively for unpowered atmospheric test flights.'
};

var question3 = {
    questionNumber: 3,
    questionText: "The first person to journey into space was a Russian man in 1961. What was his name?",
    answers: [["Yuri Gagarin", "correct"], ["Yakov Smirnoff", "wrong"], ["Fyodor Dostoyevsky", "wrong"], ["Pyotr Tchaikovsky", "wrong"]],
    pictureSource: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-rexfeatures_3828942a_qdoogf.jpg',
    correctAnswerText: 'Yuri Gegarin was the first human to journey to space on April 12, 1961 aboard Vostok 1.'
};

var question4 = {
    questionNumber: 4,
    questionText: "As of June 2018, what is the name of the man-made spacecraft currently farthest from the Earth?",
    answers: [["Voyager 1", "correct"], ["Voyager 2", "wrong"], ["Cassini", "wrong"], ["Enterprise", "wrong"]],
    pictureSource: 'https://img.purch.com/w/640/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAxMC8xODYvaTAyL3ZveWFnZXIxLWVkZ2UtdW5pdmVyc2UuanBnPzEzMDc5NzUzMDI=',
    correctAnswerText: 'Launched on September 5, 1977, Voyager 1 is over 21 billion kilometers from Earth, and has been operational for over 40 years.'
};

var question5 = {
    questionNumber: 5,
    questionText: "These neutron stars rotate rapidly sending out energy in what appear as pulses, sometimes over 1000 times per second. What are they called?",
    answers: [["Pulsars", "correct"], ["Black Holes", "wrong"], ["Red Dwarfs", "wrong"], ["Tyson Stars", "wrong"]],
    pictureSource: 'https://2.bp.blogspot.com/-3bO9AfqCooQ/WB4d3wHPxvI/AAAAAAAAA18/VA2NWTosQVkkC5PQ_BKuNK3mQyKMjwHOACLcB/s1600/sig10-012_Med.jpg',
    correctAnswerText: 'Some pulsars rival atomic clocks in their time keeping accuracy.'
};

var question6 = {
    questionNumber: 6,
    questionText: "Launched in 1990, this space telescope has led to the discovery of many new interesting facts, and has help provide justification for some of physics' leading theories?",
    answers: [["Hubble", "correct"], ["Andromeda", "wrong"], ["Pulsar", "wrong"], ["Orion", "wrong"]],
    pictureSource: 'https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2016/06/24171708/ne0213-last-hubble-mission.jpg',
    correctAnswerText: 'The Hubble Space Telescope has a mirror 2.4 meters in diameter, and has helped scientists accurately measure the expansion of the universe.'
};

var question7 = {
    questionNumber: 7,
    questionText: "What is the name of the Galaxy closest to the Milky Way?",
    answers: [["Andromeda", "correct"], ["Tatooine", "wrong"], ["Nebula", "wrong"], ["Thanos", "wrong"]],
    pictureSource: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA0My84NTIvb3JpZ2luYWwvYW5kcm9tZWRhLWdhbGF4eS12YW4tZGVuLWhvZXZlbC5qcGc=',
    correctAnswerText: 'At 2.5 million light years from earth, Andromeda is the closest neighboring galaxy.'
};

var question8 = {
    questionNumber: 8,
    questionText: "As of June 2018, currently the largest man-made object in orbit, this outpost allows astronauts to stay in space for long duration experiments?",
    answers: [["International Space Station", "correct"], ["M.I.R.", "wrong"], ["Sky Lab", "wrong"], ["Discovery", "wrong"]],
    pictureSource: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA2NS83MzEvb3JpZ2luYWwvaW50ZXJuYXRpb25hbC1zcGFjZS1zdGF0aW9uLmpwZw==',
    correctAnswerText: "The International Space Station had it's first components launched in 1998, and is expected to operate until 2028."
};

var question9 = {
    questionNumber: 9,
    questionText: "The Falcon 9 rocket from this company is dramatically reducing the cost to get to orbit through reusability. What is the name of this company?",
    answers: [["SpaceX", "correct"], ["Boeing", "wrong"], ["Sky Flight", "wrong"], ["Blue Origin", "wrong"]],
    pictureSource: 'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2018/02/poster-p-1-spacex-falcon-9-launch.jpg',
    correctAnswerText: "SpaceX is currently leading the way in reusable rocket technology, after successfully landing the Falcon 9 first stage 25 times as of June 2018."
};

var question10 = {
    questionNumber: 10,
    questionText: "What is the name of the planet that passes closest to Earth?",
    answers: [["Venus", "correct"], ["Mars", "wrong"], ["Mercury", "wrong"], ["Jupiter", "wrong"]],
    pictureSource: 'https://www.sciencenews.org/sites/default/files/2018/02/main/articles/020618_LG_venus-fobette_feat.jpg',
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
        $('.wrong').hide();
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
        $('.wrong').hide();
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
    $('#new-game').on('click', function () {
        $('.end-game').fadeOut(500).promise().done(function () {
            $('.start-screen').fadeIn(500);
            questionCounter = 0;
            correctChoices = 0;
            wrongChoices = 0;
            intervalId;
            time = 30;
        })
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
            $('#timer').text("You didn't choose an answer in time!");
            $('#question-text').text(questionArray[questionCounter].correctAnswerText);
            $('.wrong').hide();
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
        $(".correct").css("pointer-events", "none");


        if (time == 0) {
            clearInterval(intervalId);
            time = 30;
            questionCounter = questionCounter + 1;
            $('#answer-image').fadeOut();

            // Try .promises and .done to stop the flash of new info.
            $('.questions').fadeOut().promise().done(function () {
                $('#answer-list').text('');
                $('.wrong').css('visibility', 'visible');
                nextQuestion();
                $(".correct").css("pointer-events", "auto");

            });

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
