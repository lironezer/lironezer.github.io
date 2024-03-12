var numberOfLikes = 0;
var spans;

function onloasd() {
    spans = document.getElementsByTagName("span")
}

function addLike() {
    numberOfLikes ++;
    document.getElementById("total").innerHTML = "" + numberOfLikes + " On " + Date();

    //document.getElementById("luckySeven").innerHTML = 
    //"Lucky seven? " + (numberOfLikes == 7);
    if (numberOfLikes == 7) {
        document.getElementById("luckySeven").innerHTML = "Reached lucky seven!"
    } else {
        document.getElementById("luckySeven").innerHTML = "";
    }
    
    //document.getElementById("doubleFigures").innerHTML = 
    //"Double figures? " + (numberOfLikes >= 10 && numberOfLikes < 100);
    if (numberOfLikes >= 10 && numberOfLikes < 100) {
        document.getElementById("doubleFigures").innerHTML = "Reached double figures!";
    } else {
        document.getElementById("doubleFigures").innerHTML = "";
    }
}