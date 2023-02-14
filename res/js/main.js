const play = document.getElementById("play");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const gameBox = document.getElementById("gameBox");
const backButton = document.getElementById("backButton");
const mainStartingContent = document.getElementById("mainStartingContent");
const scoreText = document.getElementById("scoreText");

const rounds = document.querySelectorAll(".round");
const gameArea9x9 = document.getElementById("gameArea9x9");
const lunars = document.querySelectorAll(".lunar");
const score = document.querySelector("#score");


musicButton.onmousedown = () => {
  music.src = "https://www.youtube.com/embed/pDKvYBTZ1i4?autoplay=1";
};
musicButton.onmouseover = () => {
  music.src = "";
};
play.onclick = () => {
  mainStartingContent.style.display = "none";
  backButton.style.display = "block";
  scoreText.style.display = "block";
  gameArea9x9.style.display = "flex";
  document.body.style.backgroundImage = "none";
  gameBox.style.display = "block";
};
backButton.onclick = () => {
  mainStartingContent.style.display = "flex";
  backButton.style.display = "none";
  scoreText.style.display = "none";
  gameArea9x9.style.display = "none";

  document.body.style.backgroundImage = "url(./res/img/background.gif)";
};

let result = 0;
let strikePosi;
let timerId = 0;

function randomRound() {
  [...rounds].forEach((round) => {
    round.classList.remove("lunar");
  });

  const randomRound = rounds[Math.floor(Math.random() * 9)];
  randomRound.classList.add("lunar");

  strikePosi = randomRound.id;
}

[...rounds].forEach((round) => {
  round.addEventListener("click", (k) => {
    console.log(k);
    
    if (round.id == strikePosi) {
      result += 10;
      score.innerHTML = result;
      strikePosi = 0;
    }
    if (result >= 310) {
      alert(
        "You reached score 300, so now, if you want to play aqain click on 'ok' and play."
      );
      mainStartingContent.style.display = "flex";
      backButton.style.display = "none";
      scoreText.style.display = "none";
      gameArea9x9.style.display = "none";
      document.body.style.backgroundImage = "url(./res/img/background.gif)";
      result -= 310;
      score.innerHTML = result;
    }
  });
});


const randomLimit = Math.floor(Math.random() * (250, 500) + 150);
window.onload = () => {
  console.log(randomLimit);
  alert("this game has a random speed, so sometimes you can have slows speed or fast speed of a lunar.")

}

function moveLunar() {
  timerId = setInterval(randomRound, randomLimit);
}

moveLunar();

