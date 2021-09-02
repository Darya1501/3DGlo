/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_toggleImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/toggleImage */ \"./src/modules/toggleImage.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validate */ \"./src/modules/validate.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n // Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('2021, 8, 31'); // Меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); // Popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__.default)(); // Плавная прокрутка\n\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__.default)(); // Табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__.default)(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)(); // Смена фото в блоке \"Наша команда\" при наведении\n\n(0,_modules_toggleImage__WEBPACK_IMPORTED_MODULE_6__.default)(); // Валидация полей\n\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_7__.default)(); // Калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__.default)(); // Отправка форм ajax\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__.default)();\n\n//# sourceURL=webpack://3d/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value;\n    var squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = 0;\n    var step = 1;\n    var interval = setInterval(function () {\n      if (+totalValue.textContent >= total) {\n        totalValue.textContent = total;\n        clearInterval(interval);\n      } else {\n        step += 1;\n        totalValue.textContent = step + +totalValue.textContent;\n      }\n    }, 1);\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3d/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var datestop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (datestop - dateNow) / 1000,\n        hours = Math.floor(timeRemaining / 60 / 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        seconds = Math.floor(timeRemaining % 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  var timer = getTimeRemaining();\n\n  function updateClock() {\n    timer = getTimeRemaining();\n    timerHours.textContent = timer.hours;\n    timerMinutes.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;\n    timerSeconds.textContent = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;\n  }\n\n  if (timer.timeRemaining > 0) {\n    updateClock();\n    setInterval(updateClock, 1000);\n  } else {\n    timerHours.textContent = '00';\n    timerMinutes.textContent = '00';\n    timerSeconds.textContent = '00';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3d/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar sendForm = function sendForm() {\n  var form1 = document.getElementById('form1');\n  var form2 = document.getElementById('form2');\n  var form3 = document.getElementById('form3');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"\\n      width: 100%;\\n      height: 30px;\\n      background-size: 27px;\\n      background-repeat: no-repeat;\\n      background-position: top center;\\n    \";\n\n  var postData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(body) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch('./server.php', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n\n            case 2:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function postData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var formHandler = function formHandler(form) {\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      form.appendChild(statusMessage);\n      statusMessage.style.backgroundImage = 'url(images/preloader.gif)';\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) throw new Error('Status network not 200');\n        statusMessage.style.backgroundImage = 'url(images/success.svg)';\n        form.reset();\n      })[\"catch\"](function (error) {\n        statusMessage.style.backgroundImage = 'url(images/error.svg)';\n        console.log('error: ', error);\n      });\n    });\n  };\n\n  formHandler(form1);\n  formHandler(form2);\n  formHandler(form3);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3d/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slides = document.querySelectorAll('.portfolio-item'),\n      slider = document.querySelector('.portfolio-content');\n\n  var createDots = function createDots() {\n    for (var i = 0; i < slides.length; i++) {\n      var li = document.createElement('li');\n      li.classList.add('dot');\n      if (i === 0) li.classList.add('dot-active');\n      document.querySelector('.portfolio-dots').append(li);\n    }\n  };\n\n  createDots();\n  var dots = document.querySelectorAll('.dot');\n  var currentSlide = 0,\n      intervalID;\n\n  var prevSlide = function prevSlide(elem, index, strclass) {\n    elem[index].classList.remove(strclass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strclass) {\n    elem[index].classList.add(strclass);\n  };\n\n  var autoPlaySlider = function autoPlaySlider() {\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\n    prevSlide(dots, currentSlide, 'dot-active');\n    currentSlide++;\n    if (currentSlide >= slides.length) currentSlide = 0;\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\n    nextSlide(dots, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    intervalID = setInterval(autoPlaySlider, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(intervalID);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\n    prevSlide(dots, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dots.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slides.length) currentSlide = 0;\n    if (currentSlide < 0) currentSlide = slides.length - 1;\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\n    nextSlide(dots, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide(1500);\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3d/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar smoothScroll = function smoothScroll() {\n  var anchors = document.querySelectorAll('a[href*=\"#\"]');\n\n  var _iterator = _createForOfIteratorHelper(anchors),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener('click', function (event) {\n        event.preventDefault();\n        var blockID = anchor.getAttribute('href').substr(1);\n        var block = document.getElementById(blockID);\n\n        if (block) {\n          block.scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n          });\n        }\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://3d/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target.classList.contains('service-header-tab')) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3d/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleImage.js":
/*!************************************!*\
  !*** ./src/modules/toggleImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleImage = function toggleImage() {\n  var imageBlock = document.querySelector('.command .row');\n\n  var toggleSrc = function toggleSrc(item) {\n    var oldSrc = item.getAttribute('src');\n    var newSrc = item.dataset.img;\n    item.setAttribute('src', newSrc);\n    item.dataset.img = oldSrc;\n  };\n\n  imageBlock.addEventListener('mouseover', function (event) {\n    var target = event.target;\n    toggleSrc(target);\n  });\n  imageBlock.addEventListener('mouseout', function (event) {\n    var target = event.target;\n    toggleSrc(target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleImage);\n\n//# sourceURL=webpack://3d/./src/modules/toggleImage.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  var hendlerMenu = function hendlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu')) {\n      hendlerMenu();\n    } else if (target.tagName === 'A' && target.closest('menu')) {\n      hendlerMenu();\n    } else if (menu.classList.contains('active-menu') && !target.closest('menu')) {\n      hendlerMenu();\n    }\n\n    return;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3d/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = popup.querySelector('.popup-content');\n  popupBtn.forEach(function (elem) {\n    // открытие модального окна\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n      var reqID = 0;\n\n      var animate = function animate() {\n        if (popupContent.style.opacity < 1) {\n          popupContent.style.opacity = 0.05 + parseFloat(popupContent.style.opacity);\n          popupContent.style.top = -1 + parseFloat(popupContent.style.top) + '%';\n        } else {\n          cancelAnimationFrame(reqID);\n          return;\n        }\n\n        reqID = requestAnimationFrame(animate);\n      };\n\n      if (document.documentElement.clientWidth > 768) {\n        popupContent.style.opacity = 0;\n        popupContent.style.top = 30 + '%';\n        animate();\n      }\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    // Закрытие модального окна\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3d/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/validate.js":
/*!*********************************!*\
  !*** ./src/modules/validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validate = function validate() {\n  var numberFields = document.querySelectorAll('.calc-block > input'),\n      names = document.querySelectorAll('.form-name'),\n      message = document.querySelector('.mess'),\n      emails = document.querySelectorAll('.form-email'),\n      phones = document.querySelectorAll('.form-phone');\n  var inputs = [];\n  inputs.push(message);\n\n  var validateInput = function validateInput(field, symbols) {\n    field.addEventListener('input', function () {\n      field.value = field.value.replace(symbols, '');\n    });\n  };\n\n  var validateBlur = function validateBlur(field) {\n    field.addEventListener('blur', function () {\n      field.value = field.value.replace(/^.{0,1}$/g, '');\n      field.value = field.value.replace(/( |-)\\1{1,}/g, \"$1\");\n      field.value = field.value.replace(/^( |-)/, '');\n      field.value = field.value.replace(/( |-)$/, '');\n      var event = new Event('input');\n      field.dispatchEvent(event);\n    });\n  };\n\n  numberFields.forEach(function (field) {\n    inputs.push(field);\n    validateInput(field, /\\D/g);\n  });\n  emails.forEach(function (email) {\n    inputs.push(email);\n    validateInput(email, /[^A-Za-z0-9@-_.!~*']/g);\n  });\n  phones.forEach(function (phone) {\n    inputs.push(phone);\n    validateInput(phone, /[^0-9-()+]/g);\n  });\n  names.forEach(function (name) {\n    inputs.push(name);\n    validateInput(name, /[^А-Яа-я -]/g);\n  });\n  validateInput(message, /[^А-Яа-я -0-9!?,.]/g);\n  inputs.forEach(function (input) {\n    validateBlur(input);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://3d/./src/modules/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;