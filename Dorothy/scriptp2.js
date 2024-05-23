var numberOfLikes = 0;

function addLike() {
    numberOfLikes += 1;
    document.getElementById("total").innerHTML = numberOfLikes;

    if (numberOfLikes == 10) {
        document.getElementById("gotHeart").innerHTML = "השגת לב!";
    } else {
        document.getElementById("gotHeart").innerHTML = "";
    }

    if (numberOfLikes >= 20 && numberOfLikes < 100) {
        document.getElementById("gotEmotions").innerHTML = "וואו את ממש רגישה";
		document.getElementById('bonusButton').style.display = 'block'; // Display the button
    } else {
        document.getElementById("gotEmotions").innerHTML = "";
    }
}
