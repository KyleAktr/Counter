let startElement = document.getElementById("start-number");
let counter = parseInt(startElement.value);
let counterElement = document.getElementById("counter");
let startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function () {
  startElement.style.display = "none";
  startBtn.style.display = "none";
  let value = startElement.value;
  counter = parseInt(value);
  counterElement.textContent = value.padStart(5, "0");
});

function updateCounter() {
  let formattedCounter = counter.toString().padStart(5, "0");
  counterElement.textContent = formattedCounter;
}

window.addEventListener("DOMContentLoaded", function () {
  let formattedCounter = counter.toString().padStart(5, "0");
  counterElement.textContent = formattedCounter;
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    let value = startElement.value;
    counter = parseInt(value);
    updateCounter();
  }
  if (event.code === "Space") {
    counter++;
    updateCounter();
  }
  if (event.key === "a" || event.key === "A") {
    console.log("lancement de la video");
    let videoElement = document.getElementById("extinction-video");
    videoElement.style.display = "block"; // Afficher la vidéo
    startElement.style.display = "none"; // Masquer le champ de départ
    counterElement.style.display = "none"; // Masquer le compteur
    videoElement.currentTime = 0;
    videoElement.play();
  }
});
