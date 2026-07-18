const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateClock() {
  const now = new Date();

  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
}

// show time immediately

updateClock();

// update every second

setInterval(updateClock, 1000);
