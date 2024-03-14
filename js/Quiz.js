const NO_ANSWER = 0;

var questions;
var selectedAnswers = [];
var selectedQuestion = 0;
var Jake = 0;
var Gina = 0;
var Terry = 0;
var Amy = 0;

	function hideAll() {
		for (var i=1; i < questions.length; i++) {
			document.getElementById("question" + i).style.display = "none";
		}
	}
	
	function hideQuestion(x) {
		document.getElementById("question" + x).style.display = "none";		
	}
	
	function showQuestion(x) {
		document.getElementById("question" + x).style.display = "block";		
	}

	function showHideQ(x) {
		console.log("showHideQ(" + x + "), selectedAnswer: " + selectedAnswers[x] );
		if (x == selectedAnswers[x]) {
			hideQuestion(x);
			selectedAnswers[x] = NO_ANSWER;
		} else {
			if (selectedAnswers[x] != NO_ANSWER) {
				hideQuestion(x);
			}
			showQuestion(x);
			selectedAnswers[x] = x;
		}
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
			if ( a == 1) {
				Jake += 1;
			}
			else if (a == 2) {
				Gina += 1;
			}
			else if (a == 3) {
				Terry += 1;
			}
			else if (a == 4) {
				Amy += 1;
			}
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

	function showResult() {
		document.getElementById("showResultButton").style.display = "none";
		Result();
		document.getElementById("resultSection").style.display = "block";
	}
	

	function Result() {
		if (Jake > Gina && Jake > Terry && Jake > Amy) { 
			document.getElementById("JakeResult").innerHTML = "You're Jake Peralta!";
		}
		else if (Gina > Jake && Gina > Terry && Gina > Amy) {
			document.getElementById("GinaResult").innerHTML = "You're Gina Linetti!";
		}
		else if (Terry > Gina && Terry > Jake && Terry > Amy) {
			document.getElementById("TerryResult").innerHTML = "You're Terry Jeffords!";
		}
		else if (Amy > Gina && Amy > Jake && Amy > Terry) {
			document.getElementById("AmyResult").innerHTML = "You're Amy Santiago!";
		}
	}

	function startAgain() {
		Jake = 0;
		Gina = 0;
		Terry = 0;
		Amy = 0;

	
		for (var i = 1; i < questions.length; i++) {
			selectedAnswers[i] = NO_ANSWER;
			hideQuestion(i);
	
			for (var j = 1; j <= 5; j++) {
				unmark(i, j);
			}
		}
	
		document.getElementById("showResultButton").style.display = "block";
		document.getElementById("startAgainButton").style.display = "none";
		document.getElementById("resultSection").style.display = "none";
		showQuestion(0);
		unmark(q, a)
	}
	
	