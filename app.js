const time = document.querySelector(".time");
const play_stop_btn = document.querySelector(".play-stop");
const restart_btn = document.querySelector(".restart");

let intervalID;
let [hours, minutes, seconds] = ["00", "00", "00"];
let counterSeconds = 0;

function parseTime(timeUnit) {
  return timeUnit >= "10" ? timeUnit : "0" + timeUnit;
}

function counterTime() {
  counterSeconds++;

  hours = Math.trunc(counterSeconds / 3600);

  minutes = Math.trunc(counterSeconds / 60) - hours * 60;

  seconds = Math.trunc(counterSeconds - minutes * 60) - hours * 3600;

  hours = parseTime(hours);
  minutes = parseTime(minutes);
  seconds = parseTime(seconds);

  time.innerText = `${hours}:${minutes}:${seconds}`;
}

function play_stop() {
  if (play_stop_btn.innerText === "▶️") {
    intervalID = setInterval(counterTime, 1000);
    play_stop_btn.innerText = "| |";
    play_stop_btn.style.backgroundColor = "red";
  } else {
    clearInterval(intervalID);
    play_stop_btn.innerText = "▶️";
    play_stop_btn.style.backgroundColor = "green";
  }
}

function restart() {
  [hours, minutes, seconds] = ["00", "00", "00"];
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

play_stop_btn.addEventListener("click", play_stop);
restart_btn.addEventListener("click", restart);
