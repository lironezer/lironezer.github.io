function hideQuestion () {
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
    document.getElementById("next").onclick = showQuestion2;
}
function showQuestion2 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'block';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("next").onclick = showQuestion3;
    document.getElementById("before").onclick = showQuestion1;
}
function showQuestion3 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'block';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("next").onclick = showQuestion4;
    document.getElementById("before").onclick = showQuestion2;
}
function showQuestion4 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'block';
    document.getElementById("fifth").style.display = 'none';
    document.getElementById("next").onclick = showQuestion5;
    document.getElementById("before").onclick = showQuestion3;
}
function showQuestion5 () {
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById("fifth").style.display = 'block';
    document.getElementById("before").onclick = showQuestion4;
}