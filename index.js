let counter = 0;
let counterElement = document.getElementById("counter");

function updateCounter() {
  counter++;
  let formattedCounter = counter.toString().padStart(5, "0");
  counterElement.textContent = formattedCounter;
}

window.addEventListener("DOMContentLoaded", function () {
  let formattedCounter = counter.toString().padStart(5, "0");
  counterElement.textContent = formattedCounter;
});

document.addEventListener("keydown", updateCounter);
