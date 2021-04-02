var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1 ;
var randomimag1 = "dice" + randomNum1 + ".png";
var randomimag2 = "dice" + randomNum2 + ".png";
var randomImagSrc1 = "images/" + randomimag1;
var randomImagSrc2 = "images/" + randomimag2;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImagSrc1);
image2.setAttribute("src",randomImagSrc2);
if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
