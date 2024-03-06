const NO_ANSWER = 0;

var questions;
var selectedAnswers = [];
var selectedQuestion = 0;

	//Hide all questions
	function hideAll() {
		document.getElementById("question 1").style.display = 'none';
        document.getElementById("question 2").style.display = 'none';
        document.getElementById("question 3").style.display = 'none';
        document.getElementById("question 4").style.display = 'none';
        document.getElementById("question 5").style.display = 'none';
	}
	
	function hideQuestion(x) {
		document.getElementById("question" + x).style.display = "none";		
	}
	
	function showQuestion(x) {
		document.getElementById("question" + x).style.display = "block";	
	}
	
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

	function mark(q, a) {
		console.log("mark(" + q + ", " + a + ")" );
		document.getElementById("answer" + q + "_" + a).className = " marked";
	}
	
	function unmark(q, a) {
		console.log("unmark(" + q + ", " + a + ")" );
		document.getElementById("answer" + q + "_" + a).className = "answers" + q + " answers";
	}
	
	
	document.body.onload = function () {
		initState();
		initRendering();
	}

	function initState() {
		questions = document.getElementsByClassName("question");
		for (var i=0; i < questions.length; i++) {
			selectedAnswers[i] = NO_ANSWER;
		}
		selectedQuestion = 0;
	}

	function initRendering(){	
		hideAll();
		showQuestion(0);
	}