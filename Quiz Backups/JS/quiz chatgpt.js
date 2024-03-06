var questions;
var selectedAnswers = [];
var selectedQuestion = 0;

function changePage(pageNumber) {
    hideAllPages();
    document.getElementById(`page${pageNumber}`).style.display = "block";
}

function hideAllPages() {
    const pages = document.querySelectorAll('.question-container');
    pages.forEach(page => {
        page.style.display = "none";
    });
}

function selectAnswer(pageNumber, answerNumber) {
    console.log(`Page ${pageNumber}, Answer ${answerNumber} selected`);
}

function prevPage() {
    console.log('Previous Page');
}

function nextPage() {
    console.log('Next Page');
}

changePage(1); 
