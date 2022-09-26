function startTimer(){
    var counter = 55;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }
  function start()
  {
      document.getElementById("count").style="color:red;";
      startTimer();
  };

function genQuiz(question, quizContents, highscoreContents, enterButton){


    function showQuestions(questions, quizContents){
        // enter quiz info here

    }


    function showHighScore(questions, quizContents, highscoreContents){
        // enter high score info here

    }

    //Show the questions?
    showQuestions(questions, quizContents);

    enterButton.onclick = function(){

        showHighScore(questions, quizContents, highscoreContents); 
    }



    // when user clicks enter this should show results



}