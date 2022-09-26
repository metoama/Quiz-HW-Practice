var myQuestions = [
    {

        question: "In what year did King T'Chaka visit his brother?",

        answers: {

            a: '1998',

            b: '1987',
            
            c: '1991'
    
        },
        
        correctAnswer: 'a'
    },
    {

        question: "What species did Carol Danvers get kidnapped by?",

        answers: {

            a: 'The Skrull',

            b: 'The Kree',

            c: 'The Asgardians'
        },

        correctAnswer: 'b'

    }   
];





function genQuiz(questions, quizContents, scoreContents, enterButton){


    function showQuestions(questions, quizContents){
        // enter quiz info here

        var  output = [];
        var answers;

        for(var i=0; i<questions.length; i++){

            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );


            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
                
        }

        quizContents.innerHTML = output.join('');

    }

    showQuestions(questions, quizContents);


    function showScore(questions, quizContents, scoreContents){
        // enter score info here
        var answerContents = quizContents.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContents[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContents[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContents[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	scoreContents.innerHTML = numCorrect + ' out of ' + questions.length;
}

    // Show the questions?

    showQuestions(questions, quizContents);

    
    
    
    // when user clicks enter this should show results

    enterButton.onclick = function(){

        showScore(questions, quizContents, scoreContents); 
    }

}

var quizContents = document.getElementById('quiz');
var scoreContents = document.getElementById('score');
var enterButton = document.getElementById('enter');


genQuiz(myQuestions, quizContents, scoreContents, enterButton);
