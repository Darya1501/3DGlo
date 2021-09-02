function countTimer(deadline) {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

  function getTimeRemaining() {
    const datestop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (datestop - dateNow) / 1000,
      hours = Math.floor(timeRemaining / 60 / 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  }

  let timer = getTimeRemaining();
  function updateClock() {
    timer = getTimeRemaining();
    timerHours.textContent = timer.hours;
    timerMinutes.textContent = (timer.minutes < 10) ? '0' + timer.minutes : timer.minutes;
    timerSeconds.textContent = (timer.seconds < 10) ? '0' + timer.seconds : timer.seconds;
  }

  if (timer.timeRemaining > 0) {
    updateClock();
    setInterval(updateClock, 1000);
  } else {
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
  }
}

export default countTimer;
