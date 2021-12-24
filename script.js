function updateTime(pointer, pointerClass, hoursTimesX) {
  setInterval(() => {
    const date = new Date();

    let time;

    if (pointer == "h") time = date.getHours();
    if (pointer == "m") time = date.getMinutes();
    if (pointer == "s") time = date.getSeconds();

    const timeCircle = document.querySelector(pointerClass);

    timeCircle.style.transform = `rotate(${time * hoursTimesX}deg)`;
  }, 100);
}

function updateDigitalClock() {
  let time = document.querySelector(".time");

  setInterval(() => {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (s < 10) s = `0${s}`;

    time.innerText = `${h}:${m}:${s}`;
  }, 100);
}

updateDigitalClock();

//------------ Updates Hours, Minutes and Seconds of Analog Clock

updateTime("h", ".hour-circle", 30);
updateTime("m", ".minute-circle", 6);
updateTime("s", ".second-circle", 6);

//------------ Updates Hours, Minutes and Seconds of Digital Clock

const indicators = document.querySelectorAll(".indicator-base");
let indDeg = 0;
let bigMark = 5;

//---------- Position indicators

indicators.forEach((i) => {
  i.style.transform = `rotate(${indDeg}deg)`;
  if (bigMark == 5) {
    i.firstElementChild.classList.add("big-indicator");
    bigMark = 0;
  }
  indDeg += 6;
  bigMark++;
});
