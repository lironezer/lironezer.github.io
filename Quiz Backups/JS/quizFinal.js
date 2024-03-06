function showJustOne() {
	document.getElementById("one").style.display = 'block';
	document.getElementById("two").style.display = 'none';
	document.getElementById("three").style.display = 'none';
	document.getElementById("next").onclick = showJustTwo;
}

function showJustTwo() {
	document.getElementById("one").style.display = 'none';
	document.getElementById("two").style.display = 'block';
	document.getElementById("three").style.display = 'none';
	document.getElementById("next").onclick = showJustThree;
}

function showJustThree() {
	document.getElementById("one").style.display = 'none';
	document.getElementById("two").style.display = 'none';
	document.getElementById("three").style.display = 'block';
	document.getElementById("next").onclick = showJustOne;
}

function onLoad() {
	document.getElementById("next").onclick = showJustOne;
}
