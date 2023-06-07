let counter = 0;
let counterElement = document.getElementById("counter");

function updateCounter() {
  counter++;
  counterElement.textContent = counter;
}

document.addEventListener("keydown", updateCounter);
