import './style.css';

const resetbtn = document.getElementById("reset");
const addbtn = document.getElementById("addition");
const subtractbtn = document.getElementById("subtract");
const errorAudio = new Audio('src/assets/audio/error.mp3')

let counter = document.getElementById("numTracker");
let number = 0;

function updateDisplay() {
  counter.textContent = `Number: ${number}`;
};

resetbtn.addEventListener('click', () => {
  number = 0;
  updateDisplay();
});

addbtn.addEventListener('click', () => {
  number += 1;
  updateDisplay();
});

subtractbtn.addEventListener('click', () => {
  if (number <= 0) {
    console.log("Cannot go lower than 0");
    errorAudio.play();
    return;
  }

  number -= 1;
  updateDisplay();
});

