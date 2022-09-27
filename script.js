var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var scoreDiv = document.getElementById("scoreContainer");

let myQuestions = [
    {

        question: "In what year did King T'Chaka visit his brother?",
        
            choiceA: '1998',
            choiceB: '1987',
            choiceC: '1991',
            correct: 'A'

        },

            
        {
    
            question: "What species did Carol Danvers get kidnapped by?",
    
                choiceA: 'The Skrull',
                choiceB: 'The Kree',
                choiceC: 'The Asgardians',
                correctAnswer: 'B'
        
         }, 
       
         {
            question: "What is the only name Agent Nicholas J. Fury will answer to?",
    
            choiceA: 'Nick',
            choiceB: 'Fury',
            choiceC: 'Jay',
            correctAnswer: 'B'
         },

         {  
            question: "What is Carol Danvers callsign in the Air Force?",
    
            choiceA: 'Maverick',
            choiceB: 'Marvel',
            choiceC: 'Avenger',
            correctAnswer: 'C'
        }


];
 
let lastQuestionIndex = myQuestions.length - 1; 
let runningQuestionIndex = 0; 
let count = 0;
var quizTime = 75;
let score = 0;
let TIMER



function renderQuestion(){
    let q = myQuestions[runningQuestionIndex];
    

    myQuestions.innerHTML = "<p>"+ q.myQuestions +"</p>";    
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    //quiz.style.display = "block";
    //renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;

    }    
}


function scoreRender(){
            scoreDiv.style.display = "block";
            
            // calculate the amount of question percent answered by the user
            const scorePerCent = Math.round(100 * score/myQuestions.length);
}            

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
   


 



















//function genQuiz(questions, quizContents, scoreContents, enterButton){


//    function showQuestions(questions, quizContents){
        // enter quiz info here

  //      var  output = [];
    //    var answers;

      //  for(var i=0; i<questions.length; i++){

        //    answers = [];

          //  for(letter in questions[i].answers){

            //    answers.push(
              //      '<label>'
                //        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                  //      + letter + ': '
                    //    + questions[i].answers[letter]
                   // + '</label>'
               // );


            //}

            //output.push(
              //  '<div class="question">' + questions[i].question + '</div>'
                //+ '<div class="answers">' + answers.join('') + '</div>'
            //);
                
        //}

        //quizContents.innerHTML = output.join('');

    //}

    //showQuestions(questions, quizContents);


//    function showScore(questions, quizContents, scoreContents){
        // enter score info here
  //      var answerContents = quizContents.querySelectorAll('.answers');
	
	// keep track of user's answers
	//var userAnswer = '';
	//var numCorrect = 0;
	
	// for each question...
	//for(var i=0; i<questions.length; i++){

		// find selected answer
	//	userAnswer = (answerContents[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
	//	if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
	//		numCorrect++;
			
			// color the answers green
	//		answerContents[i].style.color = 'lightgreen';
	//	}
		// if answer is wrong or blank
	//	else{
			// color the answers red
	//		answerContents[i].style.color = 'red';
	//	}
	//}

	// show number of correct answers out of total
	//scoreContents.innerHTML = numCorrect + ' out of ' + questions.length;
//}

    // Show the questions?

  //  showQuestions(questions, quizContents);

    
    
    
    // when user clicks enter this should show results

    //enterButton.onclick = function(){

      //  showScore(questions, quizContents, scoreContents); 
    //}

//}

//var quizContents = document.getElementById('quiz');
//var scoreContents = document.getElementById('score');
//var enterButton = document.getElementById('enter');


//genQuiz(myQuestions, quizContents, scoreContents, enterButton);
