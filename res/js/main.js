const play = document.getElementById("play");
const gameBox = document.getElementById("gameBox");
const backButton = document.getElementById("backButton");
const mainStartingContent = document.getElementById("mainStartingContent");
const scoreText = document.getElementById("scoreText");

const squares = document.querySelectorAll(".square");
const grid = document.getElementById("grid");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");

play.onclick = () => {
    mainStartingContent.style.display = "none";
    backButton.style.display = "block";
    scoreText.style.display = "block";
    grid.style.display = "flex";
    document.body.style.backgroundImage = "none";
    gameBox.style.display = "block";
   
}
backButton.onclick = () => {
    mainStartingContent.style.display = "flex";
    backButton.style.display = "none";
    scoreText.style.display = "none";
    grid.style.display = "none";
    document.body.style.backgroundImage = "url(./res/img/background.gif)";
}



let result = 0;
let hitPosition;
let timerId = 0;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  const randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("click", (k) => {
    console.log(k);

    if (square.id == hitPosition) {
      result += 10;
      score.innerHTML = result;
      hitPosition = 0;
 
    }
    if (result >= 300) {
        alert("You reached score 300, so now, if you want to play aqain click on 'ok' and reload the page.");
        mainStartingContent.style.display = "flex";
        backButton.style.display = "none";
        scoreText.style.display = "none";
        grid.style.display = "none";
        document.body.style.backgroundImage = "url(./res/img/mainBackground.jfif)";
    }
   
  });
});

let clickToFast = 500;

squares.onclick = () => {
  clickToFast += 10;
}

function movemole() {
  timerId = setInterval(randomSquare, clickToFast);
}

movemole();


