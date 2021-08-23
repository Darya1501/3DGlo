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

    const menu = document.querySelector('menu');
    const hendlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('.menu')) {
        hendlerMenu();
      } else if (target.tagName === 'A' && target.closest('menu')) {
        hendlerMenu();
      } else if (!target.closest('menu')) {
        hendlerMenu();
      }
    });
  };

  toggleMenu();


  // Popup
  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupContent = popup.querySelector('.popup-content');

    popupBtn.forEach(elem => { // открытие модального окна
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

    popup.addEventListener('click', event => { // Закрытие модального окна
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };

  togglePopup();


  // Плавная прокрутка
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (const anchor of anchors) {
    anchor.addEventListener('click', event => {
      event.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);
      const block = document.getElementById(blockID);

      if (block) {
        block.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }


  // Табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = index => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', event => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target.classList.contains('service-header-tab')) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();

});
