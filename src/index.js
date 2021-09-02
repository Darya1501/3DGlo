import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import toggleImage from './modules/toggleImage';
import validate from './modules/validate';
import calc from './modules/calc';
import sendForm from './modules/sendForm';



// Timer
countTimer('2021, 9, 20');
// Меню
toggleMenu();
// Popup
togglePopup();
// Плавная прокрутка
smoothScroll();
// Табы
tabs();
// Слайдер
slider();
// Смена фото в блоке "Наша команда" при наведении
toggleImage();
// Валидация полей
validate();
// Калькулятор
calc();
// Отправка форм ajax
sendForm();
