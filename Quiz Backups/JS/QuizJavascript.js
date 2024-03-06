function hideQuestions () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
}
function showQuestion1 () {
    document.getElementById("first").style.display = 'block';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
}
function showQuestion2 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'block';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
}
function showQuestion3 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'block';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
}
function showQuestion4 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'block';
    document.getElementById("fifth").style.display = 'none';
}
function showQuestion5 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
	document.getElementById("fifth").style.display = 'block';
}





const NO_ANSWER = 0;

var questions;
var selectedAnswers = [];
var selectedQuestion = 0;
	
	//When clicking an answer, mark/unmark it and update selected answers array.
	function choose(q, a) {
		console.log("choose(" + q + ", " + a + "), selectedAnswer: " + selectedAnswers[q] );
		if (a == selectedAnswers[q]) {
			unmark(q, a);
			selectedAnswers[q] = NO_ANSWER;
		} else {
			if (selectedAnswers[q] != NO_ANSWER) {
				unmark(q,selectedAnswers[q]);
			}
			mark(q, a);
			selectedAnswers[q] = a;
		}
	}

	//Change style for marked answer
	function mark(q, a) {
		console.log("mark(" + q + ", " + a + ")" );
		document.getElementById("answer" + q + "_" + a).className = "marked";
	}
	
	//Restore default style for answer that was marked twice
	function unmark(q, a) {
		console.log("unmark(" + q + ", " + a + ")" );
		document.getElementById("answer" + q + "_" + a).className = "answers" + q + " answers";
	}
	
	
	//Initialization	
	document.body.onload = function () {
		initState();
		initRendering();
	}

	// Initialize all variables
	function initState() {
		questions = document.getElementsByClassName("question");
		for (var i=0; i < questions.length; i++) {
			selectedAnswers[i] = NO_ANSWER;
		}
		selectedQuestion = 0;
	}

	//Hide all questions, then show only the first one
	function initRendering(){	
		hideAll();
		showQuestion(0);
	}