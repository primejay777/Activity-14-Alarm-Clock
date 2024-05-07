let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let alarmTimeInput = document.getElementById("alarmTime");
let setAlarmBtn = document.getElementById("setAlarmBtn");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");
let alarmSound = document.getElementById("alarmSound");

let intervalId;
let alarmTime;

startBtn.addEventListener("click", function() {
  intervalId = setInterval(updateTime, 1000);
});

stopBtn.addEventListener("click", function() {
  clearInterval(intervalId);
});

setAlarmBtn.addEventListener("click", function() {
  let alarmTimeString = alarmTimeInput.value;
  let parts = alarmTimeString.split(":");
  let alarmHours = parseInt(parts[0]);
  var alarmMinutes = parseInt(parts[1]);
  alarmTime = new Date();
  alarmTime.setHours(alarmHours);
  alarmTime.setMinutes(alarmMinutes);
});

function updateTime() {
  let currentDate = new Date();
  let hours = addLeadingZero(currentDate.getHours());
  let minutes = addLeadingZero(currentDate.getMinutes());
  let seconds = addLeadingZero(currentDate.getSeconds());

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  if (alarmTime && currentDate >= alarmTime) {
    playAlarmSound();
    clearInterval(intervalId);
    alert("Boi, alarm oh ga tingug")
  }
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

function playAlarmSound() {
  alarmSound.play();
}