var numberOfLikes = 0;

function addLike() {
    if (numberOfLikes<20){
        numberOfLikes += 1;
    }
    document.getElementById("total").innerHTML = numberOfLikes;

    if (numberOfLikes == 10) {
        document.getElementById("gotHeart").innerHTML = "השגת לב!";
    } else {
        document.getElementById("gotHeart").innerHTML = "";
    }

    if (numberOfLikes == 20) {
        document.getElementById("gotEmotions").innerHTML = "וואו את ממש רגישה";
		document.getElementById('bonusButton').style.display = 'block'; 
    } else {
        document.getElementById("gotEmotions").innerHTML = "";
    }
}

function IdleAnimation (){
    var dorothy = document.getElementById("dorothy");
    dorothy.style.background= "url('footage/idle2.png')";
    dorothy.style.animation = "dorothyAnimation 2s steps(16) infinite";

    console.log("test");

}