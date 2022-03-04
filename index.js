// Generating random Image -1 
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomImage1Source = "images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src", randomImage1Source)

// Generating random Image -2
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImage2Source = "images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",randomImage2Source)

// checking the winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").textContent = "Player 1 Wins!";
    
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").textContent = "Player 2 Wins!";
    
}
else {
    document.querySelector("h2").textContent = "Draw";
    
}

// Other way of declaring winner just for practice

/*if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").textContent = "Player 1 Wins!";
    // document.querySelector("h2").classList.remove("win");
    document.querySelector("h2").classList.add("winner");
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").textContent = "Player 2 Wins!";
    // document.querySelector("h2").classList.remove("win");
    document.querySelector("h2").classList.add("winner");
}
else {
    document.querySelector("h2").textContent = "Draw";
    // document.querySelector("h2").classList.remove("win");
    document.querySelector("h2").classList.add("winner");
}*/
