const NO_ANSWER = 0;

var questions;
var selectedAnswers = [];
var selectedQuestion = 0;

function hideAll() {
    for (var i = 0; i < questions.length; i++) {
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
    console.log("choose(" + q + ", " + a + "), selectedAnswer: " + selectedAnswers[q]);
    if (a === selectedAnswers[q]) {
        unmark(q, a);
        selectedAnswers[q] = NO_ANSWER;
    } else {
        if (selectedAnswers[q] !== NO_ANSWER) {
            unmark(q, selectedAnswers[q]);
        }
        mark(q, a);
        selectedAnswers[q] = a;
    }
}

function mark(q, a) {
    console.log("mark(" + q + ", " + a + ")");
    document.getElementById("answer" + q + "_" + a).classList.add("marked");
}

function unmark(q, a) {
    console.log("unmark(" + q + ", " + a + ")");
    document.getElementById("answer" + q + "_" + a).classList.remove("marked");
}
