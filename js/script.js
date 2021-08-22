window.addEventListener('DOMContentLoaded', () => {

  // Timer
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

  countTimer('2021, 8, 31');


  // Меню
  const toggleMenu = () => {

    const menuBtn = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li>a');

    const hendlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', () => {
      hendlerMenu();
    });

    closeBtn.addEventListener('click', () => {
      hendlerMenu();
    });

    menuItems.forEach(elem => elem.addEventListener('click', hendlerMenu));

  };

  toggleMenu();


  // Popup

  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close'),
      popupContent = popup.querySelector('.popup-content');


    popupBtn.forEach(elem => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';

        let reqID = 0;
        const animate = () => {
          if (popupContent.style.opacity < 1) {
            popupContent.style.opacity = 0.05 + parseFloat(popupContent.style.opacity);
            popupContent.style.top = -1 + parseFloat(popupContent.style.top) + '%';
          } else {
            cancelAnimationFrame(reqID);
            return;
          }
          reqID = requestAnimationFrame(animate);
        };
        if (document.documentElement.clientWidth > 768) {
          popupContent.style.opacity = 0;
          popupContent.style.top = 30 + '%';
          animate();
        }
      });
    });

    popupClose.addEventListener('click', () => {

      let reqID = 0;
      const animate = () => {
        if (popupContent.style.opacity >= 0) {
          popupContent.style.opacity = -0.05 + parseFloat(popupContent.style.opacity);
        } else {
          cancelAnimationFrame(reqID);
          popup.style.display = 'none';
          popupContent.style.opacity = 1;
          return;
        }
        reqID = requestAnimationFrame(animate);
      };
      if (document.documentElement.clientWidth > 768) { animate(); } else popup.style.display = 'none';
    });
  };

  togglePopup();


  // Плавная прокрутка. Вопрос: Этот способ подходит или нужен через scrollBy?
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (const anchor of anchors) {
    anchor.addEventListener('click', event => {
      event.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

});
