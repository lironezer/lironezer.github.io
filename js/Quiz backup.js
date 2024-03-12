const NO_ANSWER = 0;

var questions;
var selectedAnswers = [];
var selectedQuestion = 0;

	function hideAll() {
		for (var i=0; i < questions.length; i++) {
			document.getElementById("question" + i).style.display = "none";
		}
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

	function chooseAnswer() {
		getElementById()
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