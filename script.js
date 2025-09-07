
let count = 1000;      // starting number
const target = 1200;   // final number
const counter = document.getElementById("queryCount");

function updateCounter() {
  if (count < target) {
    count++;
    counter.textContent = count;
  } else {
    clearInterval(interval); // stop when target is reached
  }
}

// run every 1000 ms = 1 second
const interval = setInterval(updateCounter, 1000);
