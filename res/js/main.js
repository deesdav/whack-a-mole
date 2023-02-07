const play = document.getElementById("play");
const backButton = document.getElementById("backButton");
const mainStartingContent = document.getElementById("mainStartingContent");

play.onclick = () => {
    mainStartingContent.style.display = "none";
    backButton.style.display = "block";
    document.body.style.backgroundImage = "none";
}
backButton.onclick = () => {
    mainStartingContent.style.display = "flex";
    backButton.style.display = "none";
    document.body.style.backgroundImage = "url(./res/img/mainBackground.jfif)";
}