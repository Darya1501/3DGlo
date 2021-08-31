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
      } else if (menu.classList.contains('active-menu') && !target.closest('menu')) {
        hendlerMenu();
      }
      return;
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


  // Слайдер
  const slider = () => {
    const slides = document.querySelectorAll('.portfolio-item'),
      slider = document.querySelector('.portfolio-content');

    const createDots = () => {
      for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('dot');
        if (i === 0) li.classList.add('dot-active');
        document.querySelector('.portfolio-dots').append(li);
      }
    };
    createDots();
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0,
      intervalID;

    const prevSlide = (elem, index, strclass) => {
      elem[index].classList.remove(strclass);
    };
    const nextSlide = (elem, index, strclass) => {
      elem[index].classList.add(strclass);
    };

    const autoPlaySlider = () => {
      prevSlide(slides, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slides.length) currentSlide = 0;
      nextSlide(slides, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      intervalID = setInterval(autoPlaySlider, time);
    };

    const stopSlide = () => {
      clearInterval(intervalID);
    };

    slider.addEventListener('click', event => {
      event.preventDefault();

      const target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slides, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dots.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slides.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slides.length - 1;

      nextSlide(slides, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', event => {
      if (event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', event => {
      if (event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')) {
        startSlide(1500);
      }
    });

    startSlide(1500);

  };
  slider();


  // Смена фото в блоке "Наша команда" при наведении
  const toggleImage = () => {
    const imageBlock = document.querySelector('.command .row');

    const toggleSrc = item => {
      const oldSrc = item.getAttribute('src');
      const newSrc = item.dataset.img;

      item.setAttribute('src', newSrc);
      item.dataset.img = oldSrc;
    };

    imageBlock.addEventListener('mouseover', event => {
      const target = event.target;
      toggleSrc(target);
    });
    imageBlock.addEventListener('mouseout', event => {
      const target = event.target;
      toggleSrc(target);
    });
  };
  toggleImage();


  // Валидация полей
  const validate = () => {
    const numberFields = document.querySelectorAll('.calc-block > input'),
      names = document.querySelectorAll('.form-name'),
      message = document.querySelector('.mess'),
      emails = document.querySelectorAll('.form-email'),
      phones = document.querySelectorAll('.form-phone');

    const inputs = [];
    inputs.push(message);

    const validateInput = (field, symbols) => {
      field.addEventListener('input', () => {
        field.value = field.value.replace(symbols, '');
      });
    };

    const validateBlur = (field => {
      field.addEventListener('blur', () => {
        field.value = field.value.replace(/^.{0,1}$/g, '');
        field.value = field.value.replace(/( |-)\1{1,}/g, "$1");
        field.value = field.value.replace(/^( |-)/, '');
        field.value = field.value.replace(/( |-)$/, '');
        const event = new Event('input');
        field.dispatchEvent(event);
      });
    });

    numberFields.forEach(field => {
      inputs.push(field);
      validateInput(field, /\D/g);
    });

    emails.forEach(email => {
      inputs.push(email);
      validateInput(email, /[^A-Za-z0-9@-_.!~*']/g);
    });

    phones.forEach(phone => {
      inputs.push(phone);
      validateInput(phone, /[^0-9-()+]/g);
    });

    names.forEach(name => {
      inputs.push(name);
      validateInput(name, /[^А-Яа-я -]/g);
    });

    validateInput(message, /[^А-Яа-я -0-9!?,.]/g);

    inputs.forEach(input => {
      validateBlur(input);
    });

  };
  validate();


  // Калькулятор
  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      const squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      totalValue.textContent = 0;
      let step = 1;
      const interval = setInterval(() => {
        if (+totalValue.textContent >= total) {
          totalValue.textContent = total;
          clearInterval(interval);
        } else {
          step += 1;
          totalValue.textContent = step + +totalValue.textContent;
        }
      }, 1);
    };

    calcBlock.addEventListener('change', event => {
      const target = event.target;
      if (target.matches('select') || target.matches('input')) {
        countSum();
      }
    });
  };
  calc();


  // Отправка форм ajax
  const sendForm = () => {

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `
      width: 100%;
      height: 30px;
      background-size: 27px;
      background-repeat: no-repeat;
      background-position: top center;
    `;

    const postData = (body, outputData, errorData) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          outputData();
        } else {
          errorData(request.status);
        }
      });
      request.open('POST', './server.php');
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(body));
    };

    const formHandler = form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.style.backgroundImage = 'url(images/preloader.gif)';

        const formData = new FormData(form);
        const body = {};
        formData.forEach((val, key) => {
          body[key] = val;
        });

        postData(body,
          () => {
            statusMessage.style.backgroundImage = 'url(images/success.svg)';
            form.reset();
          },
          error => {
            statusMessage.style.backgroundImage = 'url(images/error.svg)';
            console.log('error: ', error);
          });

      });
    };

    formHandler(form1);
    formHandler(form2);
    formHandler(form3);

  };
  sendForm();

});
